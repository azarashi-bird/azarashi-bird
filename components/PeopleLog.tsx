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
import {
  getAllToku,
  getUserToku,
  getTargetToku,
  getNewestToku,
} from '../firebase';
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
  const [userTokus, setUserTokus] = useState([]);
  const [imgIndexArr, setImgIndexArr] = useState([]);
  const [allTokus, setAllTokus] = useState([]);

  const [isAnyTokus, setIsAnyTokus] = useState('allToku');
  const navigation = useNavigation();
  const GETLIMIT = 10;

  const dataToArr = (datas) => {
    return datas.map((obj) => {
      const array = [];
      array.push(obj.toku);
      const date = obj.createdAt.toDate();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const formatted = ` ${month}/${day}`;
      array.push(formatted);
      return array;
    });
  };
  const targetList = async () => {
    const allTargetDatas = await getUserToku();
    const fullArray = dataToArr(allTargetDatas);
    setUserTokus(fullArray);
  };

  const getImgIndexArr = async (idArr) => {
    const result = [];
    for (const ele of idArr) {
      const dataList = await getTargetToku(ele);
      const imgIndex = Math.floor((dataList.length % 45) / 3);
      result.push(imgIndex);
    }
    console.log(result, 'IMG INDEX LIST');
    return result;
  };

  const allList = async () => {
    const allTokusDataLimited = await getNewestToku(GETLIMIT);
    const allTokuArr = dataToArr(allTokusDataLimited);
    setAllTokus(allTokuArr);
    const idArr = allTokusDataLimited.map((obj) => obj.user_id);
    const indexArr = await getImgIndexArr(idArr);

    setImgIndexArr(indexArr);
  };

  useEffect(() => {
    const allSet = async () => {
      await allList();
      await targetList();
    };

    // タブを開いた時の動作
    if (isFocused) {
      allSet();
    }
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
          <PeopleTable imgIndexArr={imgIndexArr} allTokus={allTokus} />
        ) : (
          <UserTokutable userTokus={userTokus} />
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
    top: 80,
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
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  ownToku: {
    backgroundColor: '#fddea5',
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
