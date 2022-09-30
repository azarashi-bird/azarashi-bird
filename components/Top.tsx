import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image, Alert} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import styles, {customStyles} from './css';
import {Suggest} from './Suggest';
import {useState, useEffect} from 'react';
import {
  auth,
  postToku,
  getUserToku,
  getDailyToku,
  getAllToku,
  incUserPostCount,
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
    //imp user コレクションのuserPostCountを作れば読み込み回数減らせる？ 今だとgetUserTokuだとpostした徳数分読み込み発生
    const userTokus = await getUserToku();
    const tokuLength = userTokus.length;
    setTargetTokus(tokuLength);
  };

  // 一回だけこれを呼んでほしいです（usersコレクションのドキュメントが更新されたらコメントアウトしてください）
  const setUsersCollection = async () => {
    const allTokus = await getAllToku();
    for (const toku of allTokus) {
      await incUserPostCount(toku.user_id);
    }
    console.log('SERUSER COLLECTION CALLED PLZ CALL ONLY ONCE');
  };

  useEffect(() => {
    // 新しく作ったuser collectionにgetAllTokuで取得したtokusからデータの流し込みを行いたい
    // 一度データを流し込み終わったらコメントアウトして！！！
    // setUsersCollection();

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
        onPress: () => console.log(''),
      },
    ]);
  };

  const submit = () => {
    setToku('');
    if (toku !== '') {
      setDailyTokusCount(dailyTokusCount + 1);
      setTargetTokus(targetTokus + 1);
      incUserPostCount(auth.currentUser?.uid);
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
