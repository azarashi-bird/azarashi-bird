import styles, {customStyles} from './css';
import afterViews from './afterLifes';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';

const unknown = require('../assets/afterLifes/unknown.png');

export default function ContentOfDict({score}) {
  return (
    <ScrollView contentContainerStyle={[styles.dictItemsContainer]}>
      <View contentContainerStyle={[styles.dictItemsContainer]}>
        {afterViews.map((element, index) => (
          <View key={index} style={styles.dictItem}>
            <Text style={styles.dictItemName}>
              {score >= index ? element[1] : '???'}
            </Text>
            <Image
              source={score >= index ? element[0] : unknown}
              style={styles.dictItemImage}></Image>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
