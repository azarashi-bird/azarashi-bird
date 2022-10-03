import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import styles, {customStyles} from './css';
import afterViews from './afterLifes';
import {getUserPostCount, auth} from '../firebase';
import {useIsFocused} from '@react-navigation/native';

const unknown = require('../assets/afterLifes/unknown.png');
export default function Dictionary() {
  const [score, setScore] = useState(0);
  const isFocused = useIsFocused();

  const getUserTokuScore = async () => {
    const count = await getUserPostCount(auth.currentUser?.uid);
    setScore(Math.floor((count % 45) / 3));
  };

  useEffect(() => {
    if (isFocused) {
      getUserTokuScore();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={customStyles.strongText}>図鑑</Text>
      <ScrollView contentContainerStyle={[styles.container, customStyles.dict]}>
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
    </SafeAreaView>
  );
}
