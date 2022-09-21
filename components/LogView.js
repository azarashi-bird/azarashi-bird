import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import userTokus from './TargetTokus';

export default function LogView() {
  let tokus = 7;
  // userTokus['_3]の中身がデータ
  const tokuDatas = userTokus['_3'];
  const tokusValue = tokuDatas.map((obj) => obj['toku']);
  const tokusNum = tokusValue.length;
  console.log(tokusValue, tokusNum);

  return (
    <View style={styles.logContainer}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世　
        <Text style={styles.strongText}>{afterViews[tokusNum][1]}</Text>
      </Text>
      <Image source={afterViews[tokusNum][0]} style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　<Text style={styles.strongText}>{tokusNum}</Text>徳
      </Text>
      <LogTable tokuDatas={tokuDatas} tokusValue={tokusValue} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F3CF',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });
