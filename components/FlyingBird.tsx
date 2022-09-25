import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Animated,
  InteractionManager,
  View,
  Image,
  Text,
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import styles from './css';
import allTokusData from './PeopleTokus';
import AfterFlying from './AfterFlying';

const FlyingBird = ({navigation}) => {
  const altitude = useState(new Animated.Value(0))[0];
  const [isFlied, setIsFlied] = useState(false);
  const allTokuCount = allTokusData['_3'].length;
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
                  source={require('../assets/homePage/bird.gif')}
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
            <AfterFlying isFlied={isFlied} navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export {FlyingBird};
