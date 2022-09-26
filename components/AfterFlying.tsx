import {useEffect, useState, useLayoutEffect} from 'react';
import {getAllToku} from '../firebase';
import {View, Text} from 'react-native';
import styles from './css';
import {Button} from 'react-native-paper';

export default function AfterFlying({navigation, allTokus}) {
  return (
    <View style={styles.FBMessageContainer}>
      <Text style={styles.FBMessage}>おめでとう！🎉</Text>
      <Text style={styles.FBMessage}>
        今日世界で{allTokus}羽の鳥が放たれました。
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          mode="contained"
          // style={styles.button2}
          onPress={() => navigation.goBack()}>
          やったね🙌
        </Button>
      </View>
    </View>
  );
}
