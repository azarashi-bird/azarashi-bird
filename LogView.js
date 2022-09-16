import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';

export default function LogView() {
  return (
    <View style={styles.container}>
      <Text style={styles.topContent} variant="titleLarge">
        ユーザー名の来世　歩くタコのお寿司
      </Text>
      <Image
        source={require('./img/takosushi.gif')}
        style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        ユーザー名の徳　77徳
      </Text>
      <LogTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topContent: {
    marginTop: 100,
  },
  mainImage: {
    height: 300,
    width: 300,
  },
  mainText: {
    marginTop: 50,
  },
});
