import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function LogView() {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header>
        <DataTable.Title>徳</DataTable.Title>
        <DataTable.Title numeric>日付</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell numeric>公道を掃除した</DataTable.Cell>
        <DataTable.Cell numeric>07/21</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell numeric>寄付をした</DataTable.Cell>
        <DataTable.Cell numeric>07/10</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#fff',
  },
});
