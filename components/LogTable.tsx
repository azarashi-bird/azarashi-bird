import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {DataTable, Text, Button} from 'react-native-paper';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import UserTokutable from './UserTokuTable';
import afterViews from './afterLifes';

// import styles from './css';

export default function LogView({navigation, route}) {
  const userTokus = route.params.targetTokus;

  const tokusArray = userTokus.map((obj) => {
    const array = [];
    array.push(obj.toku);

    const date = obj.createdAt.toDate();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formatted = ` ${month}/${day}`;
    array.push(formatted);
    return array;
  });
  const countTokus = userTokus.length;
  const imgIndex = Math.floor((countTokus % 45) / 3);

  return (
    <View style={styles.logContainer}>
      <Image source={afterViews[imgIndex][0]} style={styles.icon}></Image>
      <Text style={styles.tokuTableText}>あなたの徳</Text>
      <UserTokutable tokusArray={tokusArray} />
      <Button
        style={styles.backButton}
        mode="contained"
        onPress={() => navigation.goBack()}>
        みんなの徳に戻る
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  tokuTableText: {
    top: 100,
    fontWeight: 'bold',
    fontSize: 25,
  },
  logContainer: {
    flexGrow: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    bottom: 80,
  },
  icon: {
    top: 100,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
