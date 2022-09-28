import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import styles from './css';

export default function LogView({navigation, route}) {
  const userTokus = route.params.targetTokus;

  const tokusArray = userTokus.map((obj) => {
    const array = [];
    array.push(obj.toku);

    const date = obj.createdAt.toDate();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formatted = ` ${month}/${day}`;
    array.push(formatted);
    return array;
  });

  return (
    // <View>
    <ScrollView style={styles.tableContainer}>
      <Text>徳テーブル</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>徳</DataTable.Title>
          <DataTable.Title>日付</DataTable.Title>
        </DataTable.Header>
        {tokusArray.length !== 0 ? (
          tokusArray.map((arr, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{arr[0]}</DataTable.Cell>
                <DataTable.Cell>{arr[1]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell>徳</DataTable.Cell>
            <DataTable.Cell>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
      <Button onPress={() => navigation.goBack()}>戻る</Button>
    </ScrollView>
    // </View>
  );
}
