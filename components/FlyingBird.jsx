import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Animated,
  InteractionManager,
  View,
  Image,
  Text,
  Button,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import styles from './css';

const FlyingBird = ({navigation}) => {
  const altitude = useState(new Animated.Value(0))[0];
  const [isFlied, setIsFlied] = useState(false);

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
            <View style={styles.FBMessageContainer}>
              <Text>おめでとう！🎉</Text>
              <Text>今日世界で◯羽の鳥が放たれました。</Text>
              <Button
                style={styles.button2}
                title="やったね🙌"
                onPress={() => navigation.goBack()}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export {FlyingBird};
