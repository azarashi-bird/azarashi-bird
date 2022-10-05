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
    setScore(Math.floor((count % 54) / 3));
  };

  useEffect(() => {
    if (isFocused) {
      getUserTokuScore();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inner, customStyles.inner]}>
        <Text style={[styles.h1, customStyles.h1]}>図鑑</Text>
        <ScrollView contentContainerStyle={[styles.dictItemsContainer]}>
          {afterViews.map((element, index) => (
            <View key={index} style={styles.dictItem}>
              <Text style={styles.dictItemName}>
                {score >= index ? element[1] : '???'}
              </Text>
              <Image
                source={score >= index ? element[0] : unknown}
                style={customStyles.dictItemImage}></Image>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
