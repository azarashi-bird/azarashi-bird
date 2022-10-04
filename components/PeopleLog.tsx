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
import {getUserToku, getTargetToku, getNewestToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';
import afterViews from './afterLifes';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import PeopleTable from './PeopleTable';
import UserTokutable from './UserTokuTable';
import styles, {customStyles} from './css';

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
    return result;
  };

  const allList = async () => {
    const allTokusDataLimited = await getNewestToku(GETLIMIT);
    const allTokuArr = dataToArr(allTokusDataLimited);
    const idArr = allTokusDataLimited.map((obj) => obj.user_id);
    const indexArr = await getImgIndexArr(idArr);

    setAllTokus(allTokuArr);
    setImgIndexArr(indexArr);
  };

  const allSet = async () => {
    await allList();
    await targetList();
  };

  useEffect(() => {
    // タブを開いた時の動作
    if (isFocused) {
      allSet();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.h1}>徳ろぐ</Text>
        <View style={styles.tabView}>
          <Text
            style={[styles.peopleTokuButton]}
            onPress={() => {
              setIsAnyTokus('allToku');
            }}>
            みんなの徳
          </Text>
          <Text
            style={[styles.ownTokuButton, customStyles.ownToku]}
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
        {isAnyTokus === 'allToku' ? (
          <Text style={[styles.userBottomRadius]}></Text>
        ) : (
          <Text style={[styles.peopleBottomRadius]}></Text>
        )}
      </View>
    </SafeAreaView>
  );
}
