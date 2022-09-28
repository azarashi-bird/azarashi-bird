import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './css';
import afterViews from './afterLifes';

export default function Dictionary() {
  return (
    <View style={styles.container}>
      <Text style={styles.strongText}>図鑑</Text>
      <ScrollView contentContainerStyle={[styles.container, styles.dict]}>
        {afterViews.map((element, index) => (
          <View style={styles.dictItem}>
            <Text style={styles.dictItemName}>{element[1]}</Text>
            <Image source={element[0]} style={styles.dictItemImage}></Image>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
