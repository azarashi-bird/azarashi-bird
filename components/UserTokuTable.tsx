import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';

export default function UserTokutable({tokusArray}) {
  return (
    <ScrollView style={styles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>徳</DataTable.Title>
          <DataTable.Title style={{left: 100}}>日付</DataTable.Title>
        </DataTable.Header>
        {tokusArray.length !== 0 ? (
          tokusArray.map((arr, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{arr[0]}</DataTable.Cell>
                <DataTable.Cell style={{left: 100}}>{arr[1]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell>徳</DataTable.Cell>
            <DataTable.Cell style={{left: 100}}>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    //   margin: 70,
    marginTop: 150,
    marginBottom: 100,
    backgroundColor: '#fff',
    paddingLeft: 10,
    width: 350,
  },
});
