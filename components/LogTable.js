import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import styles from './css';

export default function LogView({userTokus}) {
  const tokusArray = userTokus.map((obj) => {
    const array = [];
    array.push(obj.toku);
    array.push(obj.createdAt.seconds);
    return array;
  });

  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>徳</DataTable.Title>
          <DataTable.Title numeric>日付</DataTable.Title>
        </DataTable.Header>
        {tokusArray ? (
          tokusArray.map((arr, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{arr[0]}</DataTable.Cell>
                <DataTable.Cell numeric>{arr[1]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell>徳</DataTable.Cell>
            <DataTable.Cell numeric>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </ScrollView>
  );
}
