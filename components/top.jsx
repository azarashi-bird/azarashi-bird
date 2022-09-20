import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles from './css';

const Top = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Birdonation</Text>
      <TextInput mode="outlined" label="input" style={styles.input}></TextInput>

      <Button
        mode="contained"
        icon="notebook"
        onPress={() => navigation.navigate('FlyingBird')}>
        徳を積む
      </Button>
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/homePage/bird.gif')}
          style={styles.topBird}
        />
        <Image
          source={require('../assets/homePage/cage.png')}
          style={styles.topCage}
        />
      </View>
    </View>
  );
};

export default Top;
