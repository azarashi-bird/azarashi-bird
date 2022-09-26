import {StyleSheet, View, Image} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getMonthlyToku, getUserToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender() {
  const [monthlyTokus, setMonthlyTokus] = useState<any[]>([]);

  let calenderData = Array(30).fill(0);

  useEffect(() => {
    async function setTokus() {
      const target = await getMonthlyToku();
      setMonthlyTokus(target);
    }
    setTokus();
  }, []);

  monthlyTokus.forEach((toku) => {
    console.log(calenderData[toku.createdAt.toDate().getDate() - 1]);
    calenderData[toku.createdAt.toDate().getDate() - 1]++;
  });
  console.log(calenderData);

  return (
    <>
      <Text>今月の徳</Text>
      <View style={styles.calender}>
        {calenderData.map((element, index) => (
          <View
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
    // <DataTable style={styles.calender}>
    //   <DataTable.Row style={styles.calenderRow}>
    //     <DataTable.Cell style={styles.calenderCellEmpty} textStyle={styles.calenderText}>1</DataTable.Cell>
    //     <DataTable.Cell style={styles.calenderCellMarked} textStyle={styles.calenderText}>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    //   <DataTable.Row>
    //     <DataTable.Cell>1</DataTable.Cell>
    //     <DataTable.Cell>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    //   <DataTable.Row>
    //     <DataTable.Cell>1</DataTable.Cell>
    //     <DataTable.Cell>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    //   <DataTable.Row>
    //     <DataTable.Cell>1</DataTable.Cell>
    //     <DataTable.Cell>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    //   <DataTable.Row>
    //     <DataTable.Cell>1</DataTable.Cell>
    //     <DataTable.Cell>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    //   <DataTable.Row>
    //     <DataTable.Cell>1</DataTable.Cell>
    //     <DataTable.Cell>2</DataTable.Cell>
    //     <DataTable.Cell>3</DataTable.Cell>
    //     <DataTable.Cell>4</DataTable.Cell>
    //     <DataTable.Cell>5</DataTable.Cell>
    //   </DataTable.Row>
    // </DataTable>
  );
}
