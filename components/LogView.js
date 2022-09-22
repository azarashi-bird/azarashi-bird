import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

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
        <Text style={styles.strongText}>{afterViews[userTokus.length][1]}</Text>
      </Text>
      <Image
        source={afterViews[userTokus.length][0]}
        style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　<Text style={styles.strongText}>{userTokus.length}</Text>徳
      </Text>
      <LogTable userTokus={userTokus} />
    </View>
  );
}
