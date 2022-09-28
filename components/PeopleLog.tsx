import {useEffect, useState, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {DataTable, Button} from 'react-native-paper';
import {getAllToku, getUserToku, getTargetToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';
import afterViews from './afterLifes';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
// import styles from './css';
// まだ独自のスタイル設定！！

export default function PeopleLog() {
  const isFocused = useIsFocused();
  const [allUserTokus, setAllUserTokus] = useState([]);
  const [targetTokus, setTargetTokus] = useState([]);
  // とりあえず0。もしかしたら表示の揺れがあるかも
  // const [imgIndex, setImgIndex] = useState([]);
  const [preImgIndex, setPreIndex] = useState([]);
  const [targetId, setTargetId] = useState([]);
  const [mainArr, setMainArr] = useState([]);
  const navigation = useNavigation();
  // const [action, setAction] = useState(false);
  // const samplePeople = [
  //   ['img', 'username', '犬を助けた', '06/12'],
  //   ['img2', 'Moomin', '帽子を見つけてあげた', '06/10'],
  //   ['img3', 'Sloth', '苗を植えた', '06/01'],
  // ];
  useLayoutEffect(() => {
    const allList = async () => {
      const allUserDatas = await getAllToku();
      const shortList = allUserDatas.slice(0, 10);
      // console.log(shortList.length, 'NUM, 29');
      // console.log(shortList, 'NUM2, 41');OK
      setAllUserTokus(shortList);
    };
    const userList = async () => {
      const arr = [];
      await allUserTokus.map((obj) => {
        arr.push(obj.user_id);
        return obj;
      });
      setTargetId(arr);
      // targetIDを全部とれた
      // console.log(targetId.length, "TARGET, 50")
    };
    // userList(); 移動
    const targetList = async () => {
      const allTargetDatas = await getUserToku();
      setTargetTokus(allTargetDatas);
    };
    // allList();
    // targetList(); 移動
    // --
    const getOnesTokuLength = async () => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
        // console.log(targetId, "IDS 67") 取れてる
        // 何回もgetTargetTokuしてるからだめ？
        const dataList = await getTargetToku(targetId[i]);
        const countList = dataList.length;
        const realIndex = Math.floor((countList % 45) / 3);
        // countList取れる時と取れない時がある
        // console.log({realIndex});
        // if(imgIndex.length < 10) {
        arr.push(realIndex);
        // console.log(imgIndex, "imgIndex75")
      }
      // console.log(arr, "arr80")配列は取れてる
      // setImgIndexがうまくいってない！
      // setImgIndex(arr);
      await setPreIndex((pre) => {
        // console.log(pre, '86before');
        pre = arr;
        return arr;
      });
      await setPreIndex((pre) => {
        // console.log(pre, '91after');
        return pre;
      });
      /*
      await setImgIndex((pre) => {
        // console.log("ARR", pre)入ってない
        pre = arr;
        return pre;
      });
      await setImgIndex((pre) => {
        // console.log("INNERARR", pre);入ってる
        return pre;
      });
      */
      // でない
      // console.log(imgIndex, 'IMGN 82');
    };
    // getOnesTokuLength(); 移動
    // --
    const finalSet = async () => {
      const allTokuArr = await allUserTokus.map((obj) => obj.toku);
      // 全員の投稿日時

      const allTimeArr = await allUserTokus.map((obj) => {
        const date = obj.createdAt.toDate();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const formatted = ` ${month}/${day}`;
        return formatted;
      });
      // console.log(preImgIndex, "105PRE")
      // 全員のユーザー🆔
      let allArr = [];
      for (let i = 0; i < 10; i++) {
        // setTargetId(allUserArr[i]);
        // arr.push(imgIndex)
        let arr = [];
        // arr.push(preImgIndex[i]);
        arr.push(allTokuArr[i]);
        arr.push(allTimeArr[i]);
        allArr.push(arr);
      }
      // console.log(allArr, "MAINARR, 114")
      setMainArr(allArr);
    };
    // finalSet(); 移動
    // --
    const allSet = async () => {
      // 移動
      // 全員の徳のうち10件を保存
      await allList();
      // userIDを配列に保存
      await userList();
      // targetList();
      // 個人のIDから徳数を配列に保存
      await getOnesTokuLength();
      // mainArrとしてmapする配列をセット
      await finalSet();
      // このuserの徳を取得。後で遷移先に渡す
      await targetList();
    };
    allSet();
  }, [isFocused]);

  const submit = () => {
    navigation.navigate('LogTable', {targetTokus: targetTokus});
  };

  // if (preImgIndex.length !== 0) {
  // console.log(preImgIndex, 'PRE');
  // console.log(mainArr[0], 'mainArr');
  return (
    <ScrollView style={styles.peopleTable}>
      <Text style={styles.topContent}>みんなの徳</Text>
      <Button onPress={submit}>reload</Button>
      <DataTable style={styles.logs}>
        {preImgIndex.length !== 0 ? (
          mainArr.map((tokuData, index) => {
            // re-renderをアロー関数で回避...できてないので、どうにかする。
            //
            // () => setTargetId(tokuData[0]);
            // console.log({tokuData})
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{}}>
                  <Image
                    source={afterViews[preImgIndex[0]][0]}
                    style={styles.icon}></Image>
                </DataTable.Cell>
                <DataTable.Cell style={{right: 50}}>
                  {tokuData[0]}
                </DataTable.Cell>
                <DataTable.Cell style={{}}>{tokuData[1]}</DataTable.Cell>
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
  // }
  //   return <Text>みんなの徳</Text>;
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
