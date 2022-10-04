import {StatusBar} from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Pressable,
  Linking,
  ImageBackground,
} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles, {customStyles} from './css';
import {Suggest} from './Suggest';
import {useState, useEffect} from 'react';
import {
  auth,
  postToku,
  getDailyToku,
  getAllToku,
  incUserPostCount,
  getUserPostCount,
  pushUserEvoleDay,
} from '../firebase';

// import {
//   MD3LightTheme as DefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';

const Top = ({navigation}) => {
  const [isEntering, setIsEntering] = useState(false);
  const [toku, setToku] = useState('');
  const [targetTokus, setTargetTokus] = useState(0);
  const [dailyTokusCount, setDailyTokusCount] = useState(0); // とり飛ばした後のカウント表示用

  const getDailyTokuCount = async () => {
    const dailyTokus = await getDailyToku();
    setDailyTokusCount(dailyTokus.length);
  };

  const getUserTokuLength = async () => {
    const count = await getUserPostCount(auth.currentUser?.uid);
    setTargetTokus(count);
  };

  useEffect(() => {
    getUserTokuLength();
    getDailyTokuCount();
  }, []);

  const focus = () => {
    setIsEntering(!isEntering);
  };

  const bluer = () => setIsEntering(!isEntering);
  const sendAlert = () => {
    Alert.alert('Error: blank', '徳を入力してください', [
      {
        text: 'OK',
      },
    ]);
  };

  const submit = () => {
    setToku('');
    if (toku !== '') {
      const newCount = dailyTokusCount + 1;
      setDailyTokusCount(newCount);
      setTargetTokus(targetTokus + 1);
      incUserPostCount(auth.currentUser?.uid);
      postToku(toku)
        ? navigation.navigate('FlyingBird', {
            targetTokus: targetTokus,
            dailyTokusCount: newCount,
          })
        : console.log('post failed!');
      // 変化タイミング
      if ((targetTokus + 1) % 3 === 0) {
        pushUserEvoleDay();
      }
    } else {
      sendAlert();
    }
  };

  //info buttonの設置：　urlのリンクに飛ばすfunction
  const url =
    'https://routineworks.notion.site/birdonation-88f775fa5c9e485784b52d32dafa2ddc';
  const openLink = () => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log('無効なURLです: ' + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('URLを開けませんでした。', err));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.inner, customStyles.inner]}>
          <Text style={[styles.h1, customStyles.h1]}>Birdonation</Text>
          <TextInput
            mode="outlined"
            label="徳を入力してみよう"
            style={styles.input}
            value={toku}
            onChangeText={(Text) => setToku(Text)}
            onFocus={focus}
            onBlur={bluer}
            selectionColor="rgba(255, 165, 0, 0.8)"
            activeOutlineColor="rgba(255, 165, 0, 0.8)"></TextInput>
          {isEntering ? (
            <Suggest setToku={setToku} />
          ) : (
            <>
              <View style={styles.buttonWrapper}>
                <Button
                  mode="contained"
                  onPress={submit}
                  contentStyle={{backgroundColor: 'rgba(255, 165, 0, 0.8)'}}>
                  徳を積む
                </Button>
              </View>
              <View style={styles.birdInCageContainer}>
                <Image
                  source={require('../assets/homePage/bird.gif')}
                  style={customStyles.topBird}
                />
                <Image
                  source={require('../assets/homePage/cage.png')}
                  style={customStyles.topCage}
                />
              </View>
              <ImageBackground
                source={require('../assets/homePage/infoButton.png')}
                resizeMode="contain"
                style={[styles.infoImg, customStyles.infoImg]}>
                <Pressable
                  style={[styles.infoButton, customStyles.infoButton]}
                  onPress={() => {
                    openLink();
                  }}
                />
              </ImageBackground>
            </>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Top;
