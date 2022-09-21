import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles from './css';
import {Suggest} from './Suggest';
import {useState} from 'react';
import {postToku} from '../firebase';
// import {
//   MD3LightTheme as DefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';

const Top = ({navigation}) => {
  const [isEntering, setIsEntering] = useState(false);
  const [toku, setToku] = useState('');

  const focus = () => {
    setIsEntering(!isEntering);
  };
  const bluer = () => setIsEntering(!isEntering);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Birdonation</Text>
        {console.log('toku:', toku)}
        <TextInput
          mode="outlined"
          label="input"
          style={styles.input}
          value={toku}
          onChangeText={(Text) => setToku(Text)}
          onFocus={focus}
          onBlur={bluer}></TextInput>
        {isEntering ? (
          <Suggest setToku={setToku} />
        ) : (
          <>
            <Button
              mode="contained"
              onPress={() => {
                postToku(toku);
                setToku('');
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
          </>
        )}
      </View>
    </PaperProvider>
  );
};

export default Top;
