import {Text, View, Modal, Pressable, Image} from 'react-native';
import styles, {customStyles} from './css';
const s = styles;
import {getMonthlyToku, getUserEvoleDay} from '../firebase';
import {useEffect, useState, useLayoutEffect} from 'react';
import afterViews from './afterLifes';

export default function Calender({userLength, isFocused}) {
  const [monthlyTokus, setMonthlyTokus] = useState([]);
  const [chosenToku, setChosenToku] = useState([]);
  const [chosenDay, setChosenDay] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [moreInfoCalenderData, setMoreInfoCalenderData] = useState([]);
  const [thisMData, setThisMData] = useState([]);

  const [lastUpdate, setLastUpdate] = useState(undefined);

  useEffect(() => {
    async function setTokus() {
      const diff = await getMonthlyToku(lastUpdate);
      const newTokus = monthlyTokus.concat(diff);
      setMonthlyTokus(newTokus);
      setLastUpdate(new Date());
    }
    if (userLength !== -1) {
      setTokus();
    }
  }, [userLength]);

  // calenderDataを、[[calenderdata, index, boolean]]にする？
  const emptyArr = () => {
    let predata = Array(30).fill([0, null, null]);
    // predata = [[0, null, null], ...];
    setMoreInfoCalenderData(predata);
  };

  const evolutionList = (evolDay) => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const firstThisMonth = new Date(thisYear, thisMonth, 1);
    const evolData = evolDay.map((data, index) => {
      if (firstThisMonth < data) {
        const arr = [];
        // 変化したとき、0ではなく1に進化した日を記録するのでindex + 1
        arr.push(index + 1);
        arr.push(data.getDate());
        // [変化imgIndex, 日付]がarr
        // 今月分の変化thisMData[arr, arr, arr]
        return arr;
      }
      return [NaN, NaN];
    });
    setThisMData(evolData);
  };

  const getEvolDay = async () => {
    const evolArr = await getUserEvoleDay();
    let userEvol = [];
    if (evolArr) {
      userEvol = evolArr.map((data) => data.toDate());
    }
    return userEvol;
  };

  useEffect(() => {
    if (isFocused) {
      emptyArr();
      const arr = getEvolDay().then((arr) => {
        evolutionList(arr);
      });
    }
  }, [isFocused]);

  let calenderData = Array(30).fill(0);
  monthlyTokus.forEach((toku) => {
    // [0, null, null]の0を変化させたい？
    calenderData[toku.createdAt.toDate().getDate() - 1]++;
  });

  const moreInfoCalender = moreInfoCalenderData.map((arr, index) => {
    // arr => [数字, null, null]
    for (let x = thisMData.length - 1; x > -1; x--) {
      if (thisMData[x][1] === index + 1) {
        const resultArr = [];
        resultArr.push(calenderData[index]);
        resultArr.push(thisMData[x][0]);
        resultArr.push(thisMData[x][1]);
        return resultArr;
      }
    }
    return [calenderData[index], null, null];
    // arr[calender色, imgIndex, 変化の日]or[calender色, null, null]
  });

  const formattedTokus = monthlyTokus.map((obj) => {
    const day = obj.createdAt.toDate().getDate();
    const toku = obj.toku;
    const formatArr = {day, toku};
    return formatArr;
  });

  const filteredToku = (num) =>
    formattedTokus.filter((obj) => obj.day === num).map((obj) => obj.toku);

  const styleArr = [
    s.calenderCell0,
    s.calenderCell1,
    s.calenderCell2,
    s.calenderCell3,
    s.calenderCell4,
    s.calenderCell5,
  ];

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  const listedToku = chosenToku.map((toku, index) => (
    <Text key={index}>{toku + ' \n'}</Text>
  ));

  // console.log(moreInfoCalender, "MOREINFO")

  return (
    <>
      <Text style={[styles.h2, customStyles.h2]}>徳積みの記録</Text>

      <View style={[styles.calender, customStyles.calender]}>
        {moreInfoCalender.map((elem, index) => {
          if (elem[1] !== null) {
            return (
              <Pressable
                onPress={() => {
                  if (elem[0] > 0) {
                    openModal();
                    setChosenDay(index + 1);
                    setChosenToku(filteredToku(index + 1));
                  }
                }}
                key={index}
                style={[
                  s.calenderCell,
                  customStyles.calenderCell,
                  elem[0] <= 5 ? styleArr[elem[0]] : styleArr[5],
                ]}>
                <Image
                  style={[
                    {width: '100%', height: '100%', resizeMode: 'contain'},
                    customStyles.calenderCell,
                  ]}
                  source={afterViews[elem[1]][0]}
                />
              </Pressable>
            );
          } else {
            return (
              <Pressable
                onPress={() => {
                  if (elem[0] > 0) {
                    openModal();
                    setChosenDay(index + 1);
                    setChosenToku(filteredToku(index + 1));
                  }
                }}
                key={index}
                style={[
                  s.calenderCell,
                  elem[0] <= 5 ? styleArr[elem[0]] : styleArr[5],
                  customStyles.calenderCell,
                ]}></Pressable>
            );
          }
        })}
      </View>

      <View>
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={s.centeredView}>
            <View style={s.modalView}>
              <Text style={s.modalTextBold}>{chosenDay}日の徳分</Text>
              <Text style={s.modalText}>{listedToku}</Text>
              <Pressable
                style={[s.modalButton, s.closeButton]}
                onPress={() => closeModal()}>
                <Text style={s.closeButtonText}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
