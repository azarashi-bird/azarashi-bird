import {ScrollView, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import afterViews from './afterLifes';
import styles, {customStyles} from './css';

export default function PeopleTable({imgIndexArr, allTokus}) {
  return (
    <ScrollView
      style={[styles.peopleTableContainer, customStyles.peopleTableContainer]}>
      <DataTable>
        {imgIndexArr.length !== 0 ? (
          allTokus.map((tokuData, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={[styles.cellA, customStyles.cellA]}>
                  <Image
                    source={afterViews[imgIndexArr[index]][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={[styles.cellB, customStyles.cellB]}>
                  {tokuData[0]}
                </DataTable.Cell>
                <DataTable.Cell style={[styles.cellC, customStyles.cellC]}>
                  {tokuData[1]}
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
