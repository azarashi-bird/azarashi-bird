import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles from './css';

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 100,
//   },
//   appTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   input: {
//     width: 100,
//   },
// });

const top = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Birdonation</Text>
      <TextInput mode="outlined" label="input" style={styles.input}></TextInput>

      <Button
        mode="contained"
        icon="notebook"
        onPress={() => navigation.navigate('FlyingBird')}>
        記録する
      </Button>
      {/* <Button mode="contained" icon="notebook">
        記録する
      </Button> */}
    </View>
  );
};

export default top;
