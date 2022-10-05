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

export default function Profile() {
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

  // Math.max(Math.floor((userLength % 54) / 3), 0)
  // [Math.floor((userLength % 54) / 3)]
  // の結果が負にならないようにしたい

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.inner, styles.profileContainer]}>
        <Text style={[styles.h2, customStyles.h2]} variant="titleLarge">
          あなたの来世
        </Text>
        {userLength < 0 ? (
          <>
            <Text>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={[styles.h1, customStyles.h1]}>
              {afterViews[Math.max(Math.floor((userLength % 54) / 3), 0)][1]}
            </Text>
            <Image
              source={
                afterViews[Math.max(Math.floor((userLength % 54) / 3), 0)][0]
              }
              style={[styles.avatar, customStyles.avatar]}
            />
          </>
        )}

        <Calender userLength={userLength} isFocused={isFocused} />
      </ScrollView>
    </SafeAreaView>
  );
}
