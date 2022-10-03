import {ScrollView, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import afterViews from './afterLifes';
import styles, {customStyles} from './css';

export default function PeopleTable({imgIndexArr, allTokus}) {
  return (
    <ScrollView style={{...styles.logTable, ...styles.peopleTokuTable}}>
      <DataTable>
        {imgIndexArr.length !== 0 ? (
          allTokus.map((tokuData, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.cellA}>
                  <Image
                    source={afterViews[imgIndexArr[index]][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={styles.cellB}>
                  <Text>{tokuData[0]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.cellC}>
                  <Text>{tokuData[1]}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell style={[styles.cellA, customStyles.cellA]}>
              <Image source={afterViews[3][0]} style={styles.icon}></Image>
            </DataTable.Cell>
            <DataTable.Cell style={[styles.cellB, customStyles.cellB]}>
              徳
            </DataTable.Cell>
            <DataTable.Cell style={[styles.cellC, customStyles.cellC]}>
              日付
            </DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </ScrollView>
  );
}
