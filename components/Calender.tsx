import {StyleSheet, View, Image} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getUserToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender() {
  const sampleCalenderData = Array(30).fill(0);
  sampleCalenderData[1] = 3;

  // for (let i = 0; i < 6; i++) {
  //   for (let j = 0; j < 5; j++) {
  //     console.log(j+ (5*i))
  //   }
  // }
  // for (let i = 0; i < 6; i++) {
  //   <DataTable.Row>
  //   for (let j = 0; j < 5; j++) {
  //         <DataTable.Cell style={styles.calenderCellEmpty} textStyle={styles.calenderText}>{j+ (5*i)}</DataTable.Cell>
  //       }
  //   </DataTable.Row>
  // }

  return (
    <View style={styles.calender}>
      {sampleCalenderData.map((element, index) => (
        <View style={styles.calenderCell}>
          <Text>{index}</Text>
        </View>
      ))}
    </View>
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
