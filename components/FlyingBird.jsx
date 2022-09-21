import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
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
      toValue: -700,
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
      <View style={styles.container}>
        {!isFlied ? (
          <>
            <View style={styles.innerContainer}>
              <Animated.Image
                source={require('../assets/homePage/bird.gif')}
                style={[{...styles.bird, transform: [{translateY: altitude}]}]}
              />
              <Image
                source={require('../assets/homePage/cage.png')}
                style={styles.cage}
              />
            </View>
          </>
        ) : (
          <>
            <Text>おめでとう！🎉</Text>
            <Text>今日世界で◯羽の鳥が放たれました。</Text>
            <Button
              style={styles.button2}
              title="やったね🙌"
              onPress={() => navigation.goBack()}
            />
          </>
        )}

        {/* <Button
          icon="close-circle-outline"
          title="back"
          onPress={() => navigation.goBack()}
        /> */}
      </View>
    </PaperProvider>
  );
};

export {FlyingBird};
