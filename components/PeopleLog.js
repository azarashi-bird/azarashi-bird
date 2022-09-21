import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {DataTable} from 'react-native-paper';
// import styles from './css';
// まだ独自のスタイル設定！！

import allTokusData from './PeopleTokus';

export default function PeopleLog() {
  const samplePeople = [
    ['img', 'username', '犬を助けた', '06/12'],
    ['img2', 'Moomin', '帽子を見つけてあげた', '06/10'],
    ['img3', 'Sloth', '苗を植えた', '06/01'],
  ];
  const allData = allTokusData['_3'];
  // mapで配列を作ると配列の中身が順不同になったので、要素ごとに配列を作成中。
  // index番号で結びつける
  // 全員の徳
  const allTokuArr = allData.map((obj) => obj.toku);
  // 全員の投稿日時
  const allTimeArr = allData.map((obj) => obj.createdAt.seconds);
  // 全員のユーザー🆔
  const allUserArr = allData.map((obj) => obj.user_id);
  // console.log('People', allTokuArr);
  // console.log(allTimeArr);
  // console.log(allUserArr);
  // console.log(allData[0].createdAt.seconds);
  const mainArr = [];
  for (let i = 0; i < allData.length; i++) {
    let arr = [];
    arr.push(allTokuArr[i]);
    arr.push(allTimeArr[i]);
    mainArr.push(arr);
  }
  // style外したため、要再設定
  // console.log(mainArr);
  return (
    <ScrollView style={styles.peopleTable}>
      <Text style={styles.topContent}>みんなの徳</Text>
      <DataTable style={styles.logs}>
        {mainArr ? (
          mainArr.map((tokuData, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{tokuData[0]}</DataTable.Cell>
                <DataTable.Cell numeric>{tokuData[1]}</DataTable.Cell>
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
    </ScrollView>
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
  peopleTable: {
    backgroundColor: '#F6F3CF',
  },
  logs: {
    backgroundColor: '#FFFF',
  },
});
