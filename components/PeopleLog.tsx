import {useEffect, useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

// import {Text} from 'react-native-paper';
import {DataTable, Button} from 'react-native-paper';
import {getNewestToku, getUserToku, getTargetToku} from '../firebase';
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

  useLayoutEffect(() => {
    const allList = async () => {
      const allUserDatas = await getNewestToku(20);
      // const shortList = allUserDatas.slice(0, 10);
      // console.log(shortList.length, 'NUM, 29');
      // console.log(shortList, 'NUM2, 41');OK
      setAllUserTokus(allUserDatas);
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
      for (let i = 0; i < allUserTokus.length; i++) {
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
      for (let i = 0; i < allUserTokus.length; i++) {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
  },
  topView: {
    top: 60,
  },
  peopleTable: {
    backgroundColor: '#F6F3CF',
  },
  allToku: {
    backgroundColor: 'white',
    width: 175,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    top: 5,
    padding: 10,
    paddingBottom: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  ownToku: {
    backgroundColor: '#fddea5',
    width: 175,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    top: 5,
    padding: 10,
    paddingBottom: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  topText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tabView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
