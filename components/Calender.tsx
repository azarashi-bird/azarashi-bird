import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getMonthlyToku, getUserToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender() {
  const [monthlyTokus, setMonthlyTokus] = useState([]);

  let calenderData = Array(30).fill(0);
  //サーバー5万件超えたので、色が反映される方にしてます(後でなおす)
  let calenderData2 = [
    0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0,
    1, 2, 3, 4, 5,
  ];

  useEffect(() => {
    async function setTokus() {
      const target = await getMonthlyToku();
      setMonthlyTokus(target);
    }
    setTokus();
  }, []);

  monthlyTokus.forEach((toku) => {
    calenderData[toku.createdAt.toDate().getDate() - 1]++;
  });
  // console.log(calenderData); <- this is logged twice

  const s = styles;
  const styleArr = [
    s.calenderCell0,
    s.calenderCell1,
    s.calenderCell2,
    s.calenderCell3,
    s.calenderCell4,
    s.calenderCell5,
  ];

  return (
    <>
      <Text style={{fontSize: 22, marginBottom: 5}}>徳積み カレンダー</Text>
      <View style={styles.calender}>
        {calenderData2.map((elem, index) => (
          <View
            key={index}
            style={[s.calenderCell, elem <= 5 ? styleArr[elem] : styleArr[5]]}>
            <Text style={s.calenderText}>{elem}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
