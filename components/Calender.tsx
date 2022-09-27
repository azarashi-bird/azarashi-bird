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
    0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 3, 6, 7, 0, 4, 3, 2, 1, 4, 5, 3, 2, 1, 1,
    2, 0, 1, 2, 3,
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

  return (
    <>
      <Text style={{fontSize: 22, marginBottom: 5}}>徳積み カレンダー</Text>
      <View style={styles.calender}>
        {calenderData2.map((element, index) => (
          <View
            key={index}
            style={[
              styles.calenderCell,
              element === 0
                ? styles.calenderCell0
                : element === 1
                ? styles.calenderCell1
                : element === 2
                ? styles.calenderCell2
                : element === 3
                ? styles.calenderCell3
                : element === 4
                ? styles.calenderCell4
                : styles.calenderCell5,
            ]}>
            <Text style={styles.calenderText}>{element}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
