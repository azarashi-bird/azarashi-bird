import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, View, Image} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const FlyingBird = (props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [animatedValue]);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Animated.Image
            source={require('../assets/homePage/bird.gif')}
            style={{...styles.bird, opacity: animatedValue}}
          />
          <Image
            source={require('../assets/homePage/cage.png')}
            style={styles.cage}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bird: {
    top: 450,
    left: 100,
    width: 200,
    height: 250,
  },
  cage: {
    width: 400,
    height: 550,
  },
  innerContainer: {
    position: 'relative',
  },
});

export {FlyingBird};
