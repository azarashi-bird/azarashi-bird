import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles from './css';
import {Suggest} from './Suggest';
import {useState, useEffect} from 'react';
import {postToku, getUserToku} from '../firebase';
import {useIsFocused} from '@react-navigation/native';

// import {
//   MD3LightTheme as DefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';

const Top = ({navigation}) => {
  const isFocused = useIsFocused();
  const [isEntering, setIsEntering] = useState(false);
  const [toku, setToku] = useState('');
  const [targetTokus, setTargetTokus] = useState(0);

  useEffect(() => {
    const getUserTokuLength = async () => {
      const userTokus = await getUserToku();
      const tokuLength = userTokus.length;
      setTargetTokus(tokuLength);
    };
    getUserTokuLength();
  }, [isFocused]);

  const focus = () => {
    setIsEntering(!isEntering);
  };
  const bluer = () => setIsEntering(!isEntering);

  const submit = () => {
    setToku('');
    if (toku !== '') {
      postToku(toku)
        ? navigation.navigate('FlyingBird', {targetTokus: targetTokus})
        : console.log('post failed!');
    } else {
      console.log('input is blank!');
    }
  };
  return (
    <PaperProvider>
      <View style={styles.container}>
        <>
          <Text style={styles.appTitle}>Birdonation</Text>
          {/* {console.log('toku:', toku)} */}
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
              <View style={styles.buttonWrapper}>
                <Button mode="contained" onPress={submit}>
                  徳を積む
                </Button>
              </View>
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
        </>
      </View>
    </PaperProvider>
  );
};

export default Top;
