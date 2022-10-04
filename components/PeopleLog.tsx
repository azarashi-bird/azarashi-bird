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
import {getUserToku, getNewestToku, getUserPostCount} from '../firebase';
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

  // const [allTokuData, setAllTokuData] = useState([]);
  // const [lastUpdate, setLastUpdate] = useState(undefined);

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
    // const userTokuDiff = await getUserToku(lastUpdate);
    // const diffArr = dataToArr(userTokuDiff);
    // const userTokuAll = userTokus.concat(diffArr);
    // setUserTokus(userTokuAll);
  };

  const idArrToPostCountArr = async (idArr) => {
    const kyassyu = {};
    const result = [];
    for (const id of idArr) {
      if (id in kyassyu) {
        result.push(kyassyu[id]);
      } else {
        const count = await getUserPostCount(id);
        kyassyu[id] = count;
        result.push(count);
      }
    }
    return result;
  };

  const allList = async () => {
    // const diff = await getNewestToku(GETLIMIT, lastUpdate);
    // const allTokusDataLimited = allTokuData.concat(diff);
    // setAllTokuData(allTokusDataLimited);

    const allTokusDataLimited = await getNewestToku(GETLIMIT);

    const allTokuArr = dataToArr(allTokusDataLimited);
    const idArr = allTokusDataLimited.map((obj) => obj.user_id);
    const countArr = await idArrToPostCountArr(idArr);
    const imgIndexArr = countArr.map((count) => Math.floor((count % 45) / 3));

    setAllTokus(allTokuArr);
    setImgIndexArr(imgIndexArr);
  };

  const allSet = async () => {
    await allList();
    await targetList();
    // setLastUpdate(new Date());
  };

  useEffect(() => {
    if (isFocused) {
      allSet();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inner, customStyles.inner]}>
        <Text style={[styles.h1, customStyles.h1]}>徳ろぐ</Text>
        <View style={styles.tabView}>
          <Text
            style={[styles.peopleTokuButton, customStyles.peopleTokuButton]}
            onPress={() => {
              setIsAnyTokus('allToku');
            }}>
            みんなの徳
          </Text>
          <Text
            style={[styles.ownTokuButton, customStyles.ownTokuButton]}
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
          <Text
            style={[
              styles.userBottomRadius,
              customStyles.userBottomRadius,
            ]}></Text>
        ) : (
          <Text
            style={[
              styles.peopleBottomRadius,
              customStyles.userBottomRadius,
            ]}></Text>
        )}
      </View>
    </SafeAreaView>
  );
}
