import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import userTokus from './TargetTokus';
import {getUserToku} from '../firebase';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

export default function LogView() {
  // let tokus = 7;
  // userTokus['_3]の中身がデータ
  const [targetTokus, updateTokus] = useState([]);
  const isFocused = useIsFocused();

  // const tokuDatas = userTokus['_3'];
  // const tokusValue = tokuDatas.map((obj) => obj['toku']);
  // const tokusNum = tokusValue.length;
  useEffect(() => {
    const list = async () => {
      const dataOfTokus = await getUserToku();
      updateTokus(dataOfTokus);
    };
    list();
  }, [isFocused]);
  console.log({targetTokus});

  return (
    <View style={styles.logContainer}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世
        <Text style={styles.strongText}>
          {afterViews[targetTokus.length][1]}
        </Text>
      </Text>
      <Image
        source={afterViews[targetTokus.length][0]}
        style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　<Text style={styles.strongText}>{targetTokus.length}</Text>
        徳
      </Text>
      {/* <LogTable /> */}
      <LogTable targetTokus={targetTokus} />
    </View>
  );
  // return <Text>HHHHE</Text>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F3CF',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });
