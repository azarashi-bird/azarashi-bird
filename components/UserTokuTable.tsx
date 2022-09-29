import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import afterViews from './afterLifes';

export default function UserTokutable({targetTokus}) {
  const ImgIndex = Math.floor((targetTokus.length % 45) / 3);
  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell style={{right: 10}}>
            <Image source={afterViews[ImgIndex][0]} style={styles.icon}></Image>
          </DataTable.Cell>
          <DataTable.Cell style={{right: 50}}>徳</DataTable.Cell>
          <DataTable.Cell style={{left: 50}}>日付</DataTable.Cell>
        </DataTable.Row>
        {targetTokus.length !== 0 ? (
          targetTokus.map((arr, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{right: 10}}></DataTable.Cell>
                <DataTable.Cell style={{right: 50}}>{arr[0]}</DataTable.Cell>
                <DataTable.Cell style={{left: 50}}>{arr[1]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell style={{right: 10}}></DataTable.Cell>
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
    //   margin: 70,
    // marginTop: 150,
    // marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'orange',
    paddingLeft: 10,
    width: 350,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
