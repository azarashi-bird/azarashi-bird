import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image, Alert} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles, {customStyles} from './css';
import {Suggest} from './Suggest';
import {useState, useEffect} from 'react';
import {postToku, getUserToku, getDailyToku} from '../firebase';
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

  const [dailyTokusCount, setDailyTokusCount] = useState(0); // とり飛ばした後のカウント表示用

  const getDailyTokuCount = async () => {
    if (dailyTokusCount === 0) {
      const dailyTokus = await getDailyToku();
      setDailyTokusCount(dailyTokus.length - 1);
    }
  };

  useEffect(() => {
    // getUserTokuLengthは、userTable作ってあげれば読み込み節約できる気がする
    const getUserTokuLength = async () => {
      const userTokus = await getUserToku();
      const tokuLength = userTokus.length;
      setTargetTokus(tokuLength);
    };

    if (isFocused) {
      getUserTokuLength();
      getDailyTokuCount();
    }
  }, [isFocused]);

  const focus = () => {
    setIsEntering(!isEntering);
  };
  const bluer = () => setIsEntering(!isEntering);
  const sendAlert = () => {
    Alert.alert('Error: blank', '徳を入力してください', [
      {
        text: 'OK',
        onPress: () => console.log(''),
      },
    ]);
  };

  const submit = () => {
    setToku('');
    if (toku !== '') {
      setDailyTokusCount(dailyTokusCount + 1);
      postToku(toku)
        ? navigation.navigate('FlyingBird', {
            targetTokus: targetTokus,
            dailyTokusCount: dailyTokusCount,
          })
        : console.log('post failed!');
    } else {
      sendAlert();
    }
  };
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <>
          <Text style={customStyles.appTitle}>Birdonation</Text>
          <TextInput
            mode="outlined"
            label="徳を入力してみよう"
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
                  style={customStyles.topBird}
                />
                <Image
                  source={require('../assets/homePage/cage.png')}
                  style={customStyles.topCage}
                />
              </View>
            </>
          )}
        </>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Top;
