import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
import {useEffect, useState, useLayoutEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Calender from './Calender';

/*
userTokus.length % 15でエラーが出る人は、とりあえず5などベタ打ちで
対処お願いします。
*/

export default function LogView() {
  const [userTokus, setUserTokus] = useState([]);
  const [userLength, setUserLength] = useState(-1);
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    const getUserTokus = async () => {
      const dataOfTokus = await getUserToku();
      setUserTokus(dataOfTokus);
      setUserLength(dataOfTokus.length);
    };
    getUserTokus();
  }, [isFocused]);
  // console.log({userTokus});

  return (
    <ScrollView contentContainerStyle={styles.logContainer}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世
      </Text>
      {userLength < 0 ? (
        <>
          <Text style={{color: '#F6F3CF', height: 330}}>でも</Text>
        </>
      ) : (
        <>
          <Text style={styles.strongText}>
            {afterViews[Math.floor((userLength % 45) / 3)][1]}
          </Text>
          <Image
            source={afterViews[Math.floor((userLength % 45) / 3)][0]}
            style={styles.mainImage}></Image>
        </>
      )}
      {/* <Text style={styles.strongText}>
        {afterViews[Math.floor((userLength % 45) / 3)][1]}
      </Text>
      <Image
        source={afterViews[Math.floor((userLength % 45) / 3)][0]}
        style={styles.mainImage}></Image> */}
      <Calender />
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　
        <Text style={styles.strongText}>{userTokus.length}</Text>徳
      </Text>
      {/* <LogTable userTokus={userTokus} /> */}
    </ScrollView>
  );
}
