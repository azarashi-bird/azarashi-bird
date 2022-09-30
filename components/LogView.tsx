import {SafeAreaView, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import styles, {customStyles} from './css';
import afterViews from './afterLifes';
import {getUserPostCount, auth} from '../firebase';
import {useState, useLayoutEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Calender from './Calender';

/*
userTokus.length % 15でエラーが出る人は、とりあえず5などベタ打ちで
対処お願いします。
*/

export default function LogView() {
  const [userLength, setUserLength] = useState(-1);
  const isFocused = useIsFocused();

  const getUserTokuLength = async () => {
    const count = await getUserPostCount(auth.currentUser?.uid);
    setUserLength(count);
  };

  useLayoutEffect(() => {
    if (isFocused) {
      getUserTokuLength();
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
