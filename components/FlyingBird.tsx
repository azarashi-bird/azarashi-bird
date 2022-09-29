import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Animated,
  InteractionManager,
  View,
  Image,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import styles, {customStyles} from './css';
import AfterFlying from './AfterFlying';

const FlyingBird = ({navigation, route}) => {
  const altitude = useState(new Animated.Value(0))[0];
  const [isFlied, setIsFlied] = useState(false);
  const tokuCount = route.params.targetTokus + 1;
  const dailyTokusCount = route.params.dailyTokusCount;
  const [flyingImg, setFlyingImg] = useState(
    require('../assets/homePage/bird.gif')
  );

  useEffect(() => {
    if (tokuCount % 3 !== 0) {
      setFlyingImg(require('../assets/homePage/bird.gif'));
    } else {
      setFlyingImg(require('../assets/homePage/mazuru-1.gif'));
    }
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
                    {
                      ...customStyles.flyingBird,
                      transform: [{translateY: altitude}],
                    },
                  ]}
                />
                <Image
                  source={require('../assets/homePage/cage.png')}
                  style={customStyles.FBCage}
                />
              </View>
            </>
          ) : (
            <AfterFlying
              navigation={navigation}
              allTokus={dailyTokusCount}
              tokuCount={tokuCount}
            />
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export {FlyingBird};
