import {Text, View, Modal, Pressable, Image} from 'react-native';
import styles from './css';
const s = styles;
import {getMonthlyToku} from '../firebase';
import {useEffect, useState} from 'react';
import afterViews from './afterLifes';

export default function Calender({userLength, evolDay}) {
  const [monthlyTokus, setMonthlyTokus] = useState([]);
  const [chosenToku, setChosenToku] = useState([]);
  const [chosenDay, setChosenDay] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [evolved, setEvolved] = useState(false);

  const [lastUpdate, setLastUpdate] = useState(undefined);

  useEffect(() => {
    /* どうする？
    const imgIndex = Math.floor((userLength % 45) / 3);
    setPictureIndex(imgIndex);
    */

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

  //calenderData
  // 二次元配列にする
  let calenderData = Array(30).fill([0, null, null]);
  // let calenderData2 = [
  //   0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0,
  //   1, 2, 3, 4, 5,
  // ];

  /* どうやるか
    evolDayから今月の分をimgIndex番号と日付を取得。
    calenderDataに[[data, imgIndex]...]で、[data]だけの日はimg表示しない
    index+1が日付、
    imgIndex番号があればimgを取得&表示
  */

  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  const firstThisMonth = new Date(thisYear, thisMonth, 1);
  //  console.log(firstThisMonth, "FIRST")
  // firstThisMonthより先だったらとる
  // console.log({evolDay})
  const demoArr = [];
  evolDay.map((data, index) => {
    if (firstThisMonth < data) {
      const arr = [];
      arr.push(index);
      arr.push(data.getDate());
      demoArr.push(arr);
    }
  });
  // demoArrに[imgIndex, 日付]がある
  console.log({demoArr});

  // ここでcalenderDataの配列を埋めてる
  // 二次元配列の一つ目に入れる
  monthlyTokus.forEach((toku) => {
    calenderData[toku.createdAt.toDate().getDate() - 1][0]++;
  });

  const finalData = calenderData.map((arr, index) => {
    for (let x = 0; x < demoArr.length; x++) {
      if (demoArr[x][1] === index + 1) {
        const resultArr = [];
        resultArr.push(arr[0]);
        resultArr.push(demoArr[x][0]);
        resultArr.push(demoArr[x][1]);
        return resultArr;
      }
    }
    return arr;
  });
  console.log({finalData});

  // 二つ目に入れる

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

  // console.log(calenderData, "CALENDER")
  return (
    <>
      <Text style={{fontSize: 21, marginBottom: 5}}>徳積みの記録</Text>

      <View style={s.calender}>
        {finalData.map((elem, index) => {
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
                  elem[0] <= 5 ? styleArr[elem[0]] : styleArr[5],
                ]}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'contain'}}
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
                ]}></Pressable>
            );
          }
        })}
      </View>

      <View>
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={s.centeredView}>
            <View style={s.modalView}>
              <Text style={s.modalText2}>{chosenDay}日の徳分</Text>
              <Text style={s.modalText}>{listedToku}</Text>
              <Pressable
                style={[s.modalbutton, s.buttonClose]}
                onPress={() => closeModal()}>
                <Text style={s.textStyle}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
