import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';

const FlyingBird = function () {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Text>flyingBird</Text> */}
        {/* <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button> */}
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
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 180,
    left: 100,
    // backgroundColor: 'yellow',
    width: 200,
    height: 250,
  },
  cage: {
    // position: 'absolute',
    // backgroundColor: 'pink',
    width: 400,
    height: 550,
  },
  innerContainer: {
    position: 'relative',
  },
});

export {FlyingBird};
