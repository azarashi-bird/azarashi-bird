import {ScrollView, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import afterViews from './afterLifes';

export default function PeopleTable({preImgIndex, mainArr}) {
  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable style={styles.logs}>
        {preImgIndex.length !== 0 ? (
          mainArr.map((tokuData, index) => {
            // re-renderをアロー関数で回避...できてないので、どうにかする。
            //
            // () => setTargetId(tokuData[0]);
            // console.log({tokuData})
            // console.log(preImgIndex, "PeopleLog163")
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{right: 20}}>
                  <Image
                    source={afterViews[preImgIndex[index]][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={{right: 50}}>
                  {tokuData[0]}
                </DataTable.Cell>
                <DataTable.Cell style={{left: 50}}>
                  {tokuData[1]}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell style={{right: 20}}>
              <Image source={afterViews[3][0]} style={styles.icon}></Image>
            </DataTable.Cell>
            <DataTable.Cell style={{right: 50}}>徳</DataTable.Cell>
            <DataTable.Cell style={{left: 50}}>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    width: 350,
  },
  logs: {
    backgroundColor: '#FFFF',
    width: 350,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
