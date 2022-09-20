import React, {useState, useEffect, useRef} from 'react';
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

const FlyingBird = ({navigation}) => {
  // const animatedValue = useRef(new Animated.Value(0)).current;
  const altitude = useState(new Animated.Value(0))[0];
  const [isFlied, setIsFlied] = useState(false);

  // useEffect(() => {
  //   Animated.timing(leftValue, {
  //     toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [leftValue]);

  useEffect(() => {
    Animated.timing(altitude, {
      toValue: -700,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        setIsFlied(true);
        // alert('isFlied:', isFlied);
      }, 3000);
    });
  }, [altitude]);
  // function fly() {
  //   Animated.timing(altitude, {
  //     toValue: -700,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  //   InteractionManager.runAfterInteractions(() => {
  //     setTimeout(() => {
  //       setIsFlied(true);
  //       // alert('isFlied:', isFlied);
  //     }, 3000);
  //   });
  // }

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <View style={styles.innerContainer2}> */}
        {/* <Button onPress={fly} title="Press me" /> */}
        {/* </View> */}
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
            {/* <Button onPress={fly} title="Press me" /> */}
          </>
        ) : (
          <>
            <Text>おめでとう！🎉</Text>
            <Text>今日世界で◯羽の鳥が放たれました。</Text>
            <Button title="やったね🙌" />
          </>
        )}

        <Button
          icon="close-circle-outline"
          title="back"
          onPress={() => navigation.goBack()}
        />
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
