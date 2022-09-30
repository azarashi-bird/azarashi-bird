import {SafeAreaView, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import styles, {customStyles} from './css';
import afterViews from './afterLifes';
import {getUserToku} from '../firebase';
import {useState, useLayoutEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Calender from './Calender';

/*
userTokus.length % 15でエラーが出る人は、とりあえず5などベタ打ちで
対処お願いします。
*/

export default function LogView() {
  const [userTokus, setUserTokus] = useState([]);
  const [userLength, setUserLength] = useState(-1);
  const isFocused = useIsFocused();
  const [lastRead, setLastRead] = useState(new Date(1970, 0, 1));

  const getUserTokus = async () => {
    const dataOfTokus = await getUserToku(lastRead);
    const newUserTokus = userTokus.concat(dataOfTokus);

    setUserTokus(newUserTokus);
    setUserLength(newUserTokus.length);
    setLastRead(new Date());
  };

  // createBottomTabNavigator 値渡しできたらこれする必要ない そのままTOPの値を使いたい、、、、
  useLayoutEffect(() => {
    if (isFocused) {
      getUserTokus();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.logContainer}>
        <Text style={customStyles.topContent} variant="titleLarge">
          あなたの来世
        </Text>
        {userLength < 0 ? (
          <>
            <Text style={{color: '#F6F3CF', height: 330}}>でも</Text>
          </>
        ) : (
          <>
            <Text style={customStyles.strongText}>
              {afterViews[Math.floor((userLength % 45) / 3)][1]}
            </Text>
            <Image
              source={afterViews[Math.floor((userLength % 45) / 3)][0]}
              style={styles.mainImage}
            />
          </>
        )}

        <Calender />
      </ScrollView>
    </SafeAreaView>
  );
}
