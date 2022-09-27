import {useEffect, useState, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {DataTable} from 'react-native-paper';
import {getAllToku, getUserToku, getTargetToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';
import afterViews from './afterLifes';
// import styles from './css';
// まだ独自のスタイル設定！！

export default function PeopleLog() {
  const [allUserTokus, setAllUserTokus] = useState([]);
  const [targetTokus, setTargetTokus] = useState([]);
  // とりあえず0。もしかしたら表示の揺れがあるかも
  const [imgIndex, setImgIndex] = useState(0);
  const [targetId, setTargetId] = useState('');
  const isFocused = useIsFocused();
  // const samplePeople = [
  //   ['img', 'username', '犬を助けた', '06/12'],
  //   ['img2', 'Moomin', '帽子を見つけてあげた', '06/10'],
  //   ['img3', 'Sloth', '苗を植えた', '06/01'],
  // ];

  useLayoutEffect(() => {
    const allList = async () => {
      const allUserDatas = await getAllToku();
      const shortList = allUserDatas.splice(10);
      setAllUserTokus(shortList);
    };
    const targetList = async () => {
      const allTargetDatas = await getUserToku();
      setTargetTokus(allTargetDatas);
    };
    allList();
    targetList();
  }, [isFocused]);

  useEffect(() => {
    const getOnesTokuLength = async () => {
      const dataList = await getTargetToku(targetId);
      const countList = dataList.length;
      const realIndex = (countList % 45) / 3;
      setImgIndex(realIndex);
    };
    getOnesTokuLength();
  }, [targetId]);

  // async function getOnesTokuLength(uid) {
  //   const dataList = await getTargetToku(uid);
  //   const countList = dataList.length;
  //   return countList;
  // }

  // mapで配列を作ると配列の中身が順不同になったので、要素ごとに配列を作成中。
  // index番号で結びつける
  // 全員の徳
  const allTokuArr = allUserTokus.map((obj) => obj.toku);
  // 全員の投稿日時

  const allTimeArr = allUserTokus.map((obj) => {
    const date = obj.createdAt.toDate();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formatted = ` ${month}/${day}`;
    return formatted;
  });
  // 全員のユーザー🆔
  const allUserArr = allUserTokus.map((obj) => obj['user_id']);
  const mainArr = [];
  for (let i = 0; i < allTokuArr.length; i++) {
    let arr = [];
    arr.push(allUserArr[i]);
    arr.push(allTokuArr[i]);
    arr.push(allTimeArr[i]);
    mainArr.push(arr);
  }
  // console.log({mainArr})
  // style外したため、要再設定
  return (
    <ScrollView style={styles.peopleTable}>
      <Text style={styles.topContent}>みんなの徳</Text>
      <DataTable style={styles.logs}>
        {mainArr ? (
          mainArr.map((tokuData, index) => {
            // re-renderをアロー関数で回避
            () => setTargetId(tokuData[0]);
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{}}>
                  <Image
                    source={afterViews[imgIndex][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={{right: 50}}>
                  {tokuData[1]}
                </DataTable.Cell>
                <DataTable.Cell style={{}}>{tokuData[2]}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <DataTable.Row>
            <DataTable.Cell>画像</DataTable.Cell>
            <DataTable.Cell>徳</DataTable.Cell>
            <DataTable.Cell>00/00</DataTable.Cell>
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
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  peopleTable: {
    backgroundColor: '#F6F3CF',
  },
  logs: {
    backgroundColor: '#FFFF',
    width: 350,
    margin: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
