import {Text, View, Modal, Pressable} from 'react-native';
import styles from './css';
const s = styles;
import {getMonthlyToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender({userLength}) {
  const [monthlyTokus, setMonthlyTokus] = useState([]);
  const [chosenToku, setChosenToku] = useState([]);
  const [chosenDay, setChosenDay] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [evolved, setEvolved] = useState(false);

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

  //calenderData
  let calenderData = Array(30).fill(0);
  // let calenderData2 = [
  //   0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0,
  //   1, 2, 3, 4, 5,
  // ];

  monthlyTokus.forEach((toku) => {
    calenderData[toku.createdAt.toDate().getDate() - 1]++;
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

  return (
    <>
      <Text style={{fontSize: 21, marginBottom: 5}}>徳積みの記録</Text>

      <View style={s.calender}>
        {calenderData.map((elem, index) => (
          <Pressable
            onPress={() => {
              openModal();
              setChosenDay(index + 1);
              setChosenToku(filteredToku(index + 1));
            }}
            key={index}
            style={[
              s.calenderCell,
              elem <= 5 ? styleArr[elem] : styleArr[5],
            ]}></Pressable>
        ))}
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
