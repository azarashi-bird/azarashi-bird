import {FlyingBird} from './components/FlyingBird';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Top from './components/top';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f6f3cf',
    secondary: '#76DBF7',
    tertiary: '#a1b2c3',
  },
};

export default function App() {
  return (
    <PaperProvider theme="{theme}">
      <Top></Top>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me

        </Button> */}
      <FlyingBird />
      {/* <StatusBar style="auto" />
      </View> */}
    </PaperProvider>
  );
}
