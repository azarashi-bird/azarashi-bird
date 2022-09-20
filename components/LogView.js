import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';

export default function LogView() {
  return (
    <View style={styles.container}>
      <Text style={styles.topContent} variant="titleLarge">
        あなたの来世　<Text style={styles.strongText}>歩くタコのお寿司</Text>
      </Text>
      <Image
        source={require('../assets/afterLifes/takosushi.gif')}
        style={styles.mainImage}></Image>
      <Text style={styles.mainText} variant="titleLarge">
        あなたの徳　<Text style={styles.strongText}>77</Text>徳
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
  strongText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});
