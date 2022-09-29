import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput, Card} from 'react-native-paper';
import afterViews from './afterLifes';

export default function UserTokutable({targetTokus}) {
  const ImgIndex = Math.floor((targetTokus.length % 45) / 3);
  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell style={styles.cellA}>
            <Image source={afterViews[ImgIndex][0]} style={styles.icon}></Image>
          </DataTable.Cell>
          <DataTable.Cell style={styles.cellB}>徳</DataTable.Cell>
          <DataTable.Cell style={styles.cellC}>日付</DataTable.Cell>
        </DataTable.Row>
        {targetTokus.length !== 0 ? (
          targetTokus.map((arr, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.cellA}></DataTable.Cell>
                <DataTable.Cell style={styles.cellB}>{arr[0]}</DataTable.Cell>
                <DataTable.Cell style={styles.cellC}>{arr[1]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell style={styles.cellA}></DataTable.Cell>
            <DataTable.Cell style={styles.cellB}>徳を積んでね</DataTable.Cell>
            <DataTable.Cell style={styles.cellC}>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fddea5',
    paddingLeft: 10,
    width: 350,
    height: 500,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cellA: {
    right: 10,
  },
  cellB: {
    right: 50,
  },
  cellC: {
    left: 50,
  },
});
