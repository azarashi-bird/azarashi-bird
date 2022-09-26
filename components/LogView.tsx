import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Calender from './Calender';

/*
userTokus.length % 15でエラーが出る人は、とりあえず5などベタ打ちで
対処お願いします。
*/

export default function LogView() {
  const [userTokus, setUserTokus] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getUserTokus = async () => {
      const dataOfTokus = await getUserToku();
      setUserTokus(dataOfTokus);
    };
    getUserTokus();
  }, [isFocused]);
  // console.log({userTokus});

  return (
    <View style={styles.logContainer}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世
        <Text style={styles.strongText}>
          {afterViews[Math.floor((userTokus.length % 45) / 3)][1]}
        </Text>
      </Text>
      <Image
        source={afterViews[Math.floor((userTokus.length % 45) / 3)][0]}
        style={styles.mainImage}></Image>
      <Calender />
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　
        <Text style={styles.strongText}>{userTokus.length}</Text>徳
      </Text>
      <LogTable userTokus={userTokus} />
    </View>
  );
}
