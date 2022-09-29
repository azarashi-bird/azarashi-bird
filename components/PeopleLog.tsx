import {useEffect, useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import {Text} from 'react-native-paper';
import {DataTable, Button} from 'react-native-paper';
import {getAllToku, getUserToku, getTargetToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';
import afterViews from './afterLifes';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import PeopleTable from './PeopleTable';
import UserTokutable from './UserTokuTable';
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
  const [isAnyTokus, setIsAnyTokus] = useState('allToku');
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
      const fullArray = allTargetDatas.map((obj) => {
        const array = [];
        array.push(obj.toku);

        const date = obj.createdAt.toDate();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const formatted = ` ${month}/${day}`;
        array.push(formatted);
        return array;
      });
      setTargetTokus(fullArray);
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

  // const submit = () => {
  //   navigation.navigate('LogTable', {targetTokus: targetTokus});
  // };

  // let isAnyTokus = "allToku"

  // if (preImgIndex.length !== 0) {
  // console.log(preImgIndex, 'PRE');
  // console.log(mainArr[0], 'mainArr');
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button style={styles.myTokuButton} mode="contained" onPress={submit}>
        自分の徳
      </Button> */}
      <View style={{top: 80}}>
        <Text style={styles.topText}>徳ろぐ</Text>
        <View style={styles.tabView}>
          <Text
            style={styles.allToku}
            onPress={() => {
              setIsAnyTokus('allToku');
            }}>
            みんなの徳
          </Text>
          <Text
            style={styles.ownToku}
            onPress={() => {
              setIsAnyTokus('ownToku');
            }}>
            じぶんの徳
          </Text>
        </View>
        {isAnyTokus === 'allToku' ? (
          <PeopleTable preImgIndex={preImgIndex} mainArr={mainArr} />
        ) : (
          <UserTokutable targetTokus={targetTokus} />
        )}
      </View>
    </SafeAreaView>
  );
  // }
  //   return <Text>みんなの徳</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  topContent: {
    // marginTop: 100,
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
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  myTokuButton: {
    left: 100,
    width: 115,
    // top: 80,
  },
  allToku: {
    backgroundColor: 'white',
    width: 175,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  ownToku: {
    backgroundColor: 'orange',
    width: 175,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  topText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
