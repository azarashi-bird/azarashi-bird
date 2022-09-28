import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './css';
import afterViews from './afterLifes';

export default function Dictionary() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {afterViews.map((element) => (
        <View>
          <Text>{element[1]}</Text>
          <Image source={element[0]} style={styles.dictImage}></Image>
        </View>
      ))}
    </ScrollView>
  );
}
