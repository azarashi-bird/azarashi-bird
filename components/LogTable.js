import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function LogView() {
  const sampleLog = [
    ['公道を掃除した', '07/21'],
    ['寄付をした', '07/10'],
    ['歯を磨いた', '07/06'],
  ];

  return (
    <DataTable style={styles.container}>
      <DataTable.Header>
        <DataTable.Title>徳</DataTable.Title>
        <DataTable.Title numeric>日付</DataTable.Title>
      </DataTable.Header>
      {sampleLog ? (
        sampleLog.map((doing) => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{doing[0]}</DataTable.Cell>
              <DataTable.Cell numeric>{doing[1]}</DataTable.Cell>
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
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
    maxWidth: 350,
  },
});
