import {ScrollView, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import afterViews from './afterLifes';

export default function PeopleTable({imgIndexArr, allTokus}) {
  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        {imgIndexArr.length !== 0 ? (
          allTokus.map((tokuData, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.cellD}>
                  <Image
                    source={afterViews[imgIndexArr[index]][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={styles.cellE}>
                  {tokuData[0]}
                </DataTable.Cell>
                <DataTable.Cell style={styles.cellF}>
                  {tokuData[1]}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell style={styles.cellD}>
              <Image source={afterViews[3][0]} style={styles.icon}></Image>
            </DataTable.Cell>
            <DataTable.Cell style={styles.cellE}>徳</DataTable.Cell>
            <DataTable.Cell style={styles.cellF}>日付</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
      {/* <Text style={styles.bottomText}></Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    width: 350,
    height: 500,
    paddingLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cellD: {
    right: 10,
  },
  cellE: {
    right: 50,
  },
  cellF: {
    left: 50,
  },
  // bottomText: {
  //   backgroundColor: "blue"
  // }
});
