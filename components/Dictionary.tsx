import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import styles, {customStyles} from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';

const unknown = require('../assets/afterLifes/unknown.png');
export default function Dictionary() {
  const [score, setScore] = useState(0);
  const isFocused = useIsFocused();

  const [userTokus, setUserTokus] = useState([]);
  const [lastRead, setLastRead] = useState(new Date(1970, 0, 1));

  const getUserTokus = async () => {
    const dataOfTokus = await getUserToku(lastRead);
    const newUserTokus = userTokus.concat(dataOfTokus);

    setUserTokus(newUserTokus);
    setScore(Math.floor((newUserTokus.length % 45) / 3));
    setLastRead(new Date());
  };

  useEffect(() => {
    if (isFocused) {
      getUserTokus();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.h1}>図鑑</Text>
        <ScrollView contentContainerStyle={[customStyles.dictItemsContainer]}>
          {afterViews.map((element, index) => (
            <View key={index} style={styles.dictItem}>
              <Text style={styles.dictItemName}>
                {score >= index ? element[1] : '???'}
              </Text>
              <Image
                source={score >= index ? element[0] : unknown}
                style={styles.dictItemImage}></Image>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
