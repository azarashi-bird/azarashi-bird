import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Animated,
  InteractionManager,
  View,
  Image,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import styles from './css';
import AfterFlying from './AfterFlying';
import {getAllToku} from '../firebase';

const FlyingBird = ({navigation, route}) => {
  const altitude = useState(new Animated.Value(0))[0];
  const [isFlied, setIsFlied] = useState(false);
  const tokuCount = route.params.targetTokus + 1;
  const [allTokus, setAllTokus] = useState(0);
  const [flyingImg, setFlyingImg] = useState(
    require('../assets/homePage/bird.gif')
  );

  const getALlUsersToku = async () => {
    const dataOfAllTokus = await getAllToku();
    //今（Thu Sep 06 2012 09:04:30 GMT+0900）
    console.log({dataOfAllTokus});
    const _d = new Date();
    //同日の0時0分0秒
    const d = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
    const todayTokus = dataOfAllTokus.filter((obj) => {
      // obj.createdAt.toDate()　が dより遅いものだけを取り出す
      return obj.createdAt.toDate() > d;
    });
    setAllTokus(todayTokus.length);
    console.log({allTokus});
  };

  useLayoutEffect(() => {
    if (tokuCount % 3 !== 0) {
      setFlyingImg(require('../assets/homePage/bird.gif'));
    } else {
      setFlyingImg(require('../assets/homePage/mazuru-1.gif'));
    }
    getALlUsersToku();
  }, []);

  useEffect(() => {
    Animated.timing(altitude, {
      toValue: -900,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        setIsFlied(true);
      }, 3000);
    });
  }, [altitude]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View>
          {!isFlied ? (
            <>
              <View style={styles.innerContainer}>
                <Animated.Image
                  source={flyingImg}
                  style={[
                    {...styles.bird, transform: [{translateY: altitude}]},
                  ]}
                />
                <Image
                  source={require('../assets/homePage/cage.png')}
                  style={styles.cage}
                />
              </View>
            </>
          ) : (
            <AfterFlying
              navigation={navigation}
              allTokus={allTokus}
              tokuCount={tokuCount}
            />
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export {FlyingBird};
