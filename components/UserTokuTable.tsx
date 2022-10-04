import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput, Card} from 'react-native-paper';
import afterViews from './afterLifes';
import styles, {customStyles} from './css';

export default function UserTokutable({userTokus}) {
  const ImgIndex = Math.floor((userTokus.length % 45) / 3) || 0;
  return (
    <ScrollView
      style={{
        ...styles.logTable,
        ...customStyles.logTable,
        ...styles.userTokuTable,
      }}>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell style={styles.cellA}>
            <Image
              source={afterViews[ImgIndex][0]}
              style={styles.logIcon}></Image>
          </DataTable.Cell>
          <DataTable.Cell style={styles.cellB}>徳</DataTable.Cell>
          <DataTable.Cell style={styles.cellC}>日付</DataTable.Cell>
        </DataTable.Row>
        {userTokus.length !== 0 ? (
          userTokus.map((arr, index) => {
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
