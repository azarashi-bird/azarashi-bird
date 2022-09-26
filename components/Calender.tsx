import {StyleSheet, View, Image} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getMonthlyToku} from '../firebase';
import {useEffect, useState} from 'react';

export default function Calender() {
  const sampleCalenderData = [
    ['1', '0', '0', '1', '0'],
    // [1,2,0,2,0],
    // [1,2,0,2,0],
    // [1,2,0,2,0],
    // [1,2,0,2,0],
    // [1,2,0,2,0],
  ];

  const test = async () => {
    console.log(getMonthlyToku);
    const data = await getMonthlyToku();

    const fixedTimeArr = data.map((obj) => {
      const toku = obj.toku;
      const date = obj.createdAt.toDate();
      const day = date.getDate();
      const formatted = {day, toku};
      return formatted;
    });
    // console.log(fixedTimeArr);

    const daylyToku = fixedTimeArr.filter((obj) => obj.day === 21);
    console.log(daylyToku);
  };

  return (
    <DataTable>
      <DataTable.Row>
        <DataTable.Cell style={styles.calenderText} onPress={test}>
          1
        </DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell>5</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}
