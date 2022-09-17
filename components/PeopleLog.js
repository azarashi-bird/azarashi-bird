import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';

export default function PeopleLog() {
  return (
    <View style={styles.container}>
      <Text style={styles.topContent}>みんなの徳</Text>
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
});
