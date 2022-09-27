import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getMonthlyToku, getUserToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender() {
  const [monthlyTokus, setMonthlyTokus] = useState([]);

  let calenderData = Array(30).fill(0);

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
      <Text>今月の徳</Text>
      <View style={styles.calender}>
        {calenderData.map((element, index) => (
          <View
            key={index}
            style={[
              styles.calenderCell,
              element === 0
                ? styles.calenderCellEmpty
                : styles.calenderCellMarked,
            ]}>
            <Text style={styles.calenderText}>{element}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
