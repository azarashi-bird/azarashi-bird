import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Animated, View, Image} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const FlyingBird = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={require('../assets/homePage/bird.gif')}
            style={styles.bird}
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
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bird: {
    position: 'absolute',
    top: 180,
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
