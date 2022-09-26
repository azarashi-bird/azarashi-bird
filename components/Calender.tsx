import {StyleSheet, View, Image} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import styles from './css';
import {getUserToku} from '../firebase';
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

  return (
    <DataTable>
      <DataTable.Row>
        <DataTable.Cell style={styles.calenderText}>1</DataTable.Cell>
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
