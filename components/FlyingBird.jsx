import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Animated, View, Image, Button} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const FlyingBird = (props) => {
  // const animatedValue = useRef(new Animated.Value(0)).current;
  const altitude = useState(new Animated.Value(0))[0];

  // useEffect(() => {
  //   Animated.timing(leftValue, {
  //     toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [leftValue]);

  function fly() {
    Animated.timing(altitude, {
      toValue: -350,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <View style={styles.innerContainer2}> */}
        {/* <Button onPress={fly} title="Press me" /> */}
        {/* </View> */}
        <View style={styles.innerContainer}>
          <Animated.Image
            source={require('../assets/homePage/bird.gif')}
            style={[{...styles.bird, transform: [{translateY: altitude}]}]}
            // style={{...styles.bird, opacity: leftValue}}
          />
          <Image
            source={require('../assets/homePage/cage.png')}
            style={styles.cage}
          />
        </View>
        <Button onPress={fly} title="Press me" />
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
    // transform: [{translateX: 100}],
  },
  cage: {
    width: 400,
    height: 550,
  },
  innerContainer: {
    position: 'relative',
    flex: 1,
  },
  // innerContainer2: {
  //   flex: 1,
  // },
});

export {FlyingBird};
