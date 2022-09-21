import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import styles from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';

export default function LogView() {
  let tokus = 4;

  return (
    <View style={styles.logContainer}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世　
        <Text style={styles.strongText}>{afterViews[tokus][1]}</Text>
      </Text>
      <Image source={afterViews[tokus][0]} style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　<Text style={styles.strongText}>{tokus}</Text>徳
      </Text>
      <LogTable />
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
