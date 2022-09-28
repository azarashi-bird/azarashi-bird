import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
const unknown = require('../assets/afterLifes/unknown.png');
export default function Dictionary() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    async function call() {
      const userTokus = await getUserToku();
      setScore(Math.floor((userTokus.length % 45) / 3));
    }
    call();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.strongText}>図鑑</Text>
      <ScrollView contentContainerStyle={[styles.container, styles.dict]}>
        {afterViews.map((element, index) => (
          <View style={styles.dictItem}>
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
  );
}
