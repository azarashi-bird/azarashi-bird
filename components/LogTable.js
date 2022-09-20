import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import styles from './css';

export default function LogView() {
  const sampleLog = [
    ['公道を掃除した', '07/21'],
    ['寄付をした', '07/10'],
    ['歯を磨いた', '07/06'],
    ['ゴミを分別した', '07/01'],
    ['迷子を保護した', '06/25'],
    ['赤子を拾った', '06/10'],
    ['雛を巣に戻した', '05/25'],
    ['道案内をした', '05/08'],
    ['火事を防いだ', '04/01'],
    ['みみずを土に入れた', '03/20'],
  ];

  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>徳</DataTable.Title>
          <DataTable.Title numeric>日付</DataTable.Title>
        </DataTable.Header>
        {sampleLog ? (
          sampleLog.map((doing, index) => {
            return (
              <DataTable.Row key={index}>
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
    </ScrollView>
  );
}
