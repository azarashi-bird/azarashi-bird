import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {DataTable} from 'react-native-paper';

export default function PeopleLog() {
  const samplePeople = [
    ['img', 'username', '犬を助けた', '06/12'],
    ['img2', 'Moomin', '帽子を見つけてあげた', '06/10'],
    ['img3', 'Sloth', '苗を植えた', '06/01'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.topContent}>みんなの徳</Text>
      <DataTable style={styles.logs}>
        {samplePeople ? (
          samplePeople.map((doing) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{doing[0]}</DataTable.Cell>
                <DataTable.Cell>{doing[1]}</DataTable.Cell>
                <DataTable.Cell>{doing[2]}</DataTable.Cell>
                <DataTable.Cell numeric>{doing[3]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell>画像</DataTable.Cell>
            <DataTable.Cell>ユーザー名</DataTable.Cell>
            <DataTable.Cell>徳</DataTable.Cell>
            <DataTable.Cell numeric>00/00</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topContent: {
    marginTop: 100,
    marginBottom: 20,
  },
  logs: {
    backgroundColor: '#FFFF',
  },
});
