import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles from './css';
import {Suggest} from './Suggest';
import {useState} from 'react';
import {postToku} from '../firebase';

const Top = ({navigation}) => {
  const [isEntering, setIsEntering] = useState(false);
  const [toku, setToku] = useState('');

  const focus = () => {
    setIsEntering(!isEntering);
    console.log(isEntering, ' isEntering');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Birdonation</Text>
      <TextInput
        mode="outlined"
        label="input"
        style={styles.input}
        value={toku}
        onChangeText={(Text) => setToku(Text)}
        onFocus={focus}
        onBlur={() => setIsEntering(!isEntering)}></TextInput>

      {isEntering ? <Suggest /> : ''}

      <Button
        mode="contained"
        onPress={async () => {
          console.log(toku);
          await postToku(toku);
          navigation.navigate('FlyingBird');
        }}>
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
