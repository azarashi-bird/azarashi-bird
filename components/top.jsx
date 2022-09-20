import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
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
//   bird: {
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     position: 'absolute',
//     top: 50,
//     right: 30,
//     // backgroundColor: 'yellow',
//     width: 200,
//     height: 250,
//   },
//   cage: {
//     // position: 'absolute',
//     // backgroundColor: 'pink',
//     width: 400,
//     height: 550,
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

      <Image
        source={require('../assets/homePage/bird.gif')}
        style={styles.bird}
      />
      <Image
        source={require('../assets/homePage/cage.png')}
        style={styles.cage}
      />

    </View>
  );
};

export default top;
