import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import LogView from './LogView';
// メモ：npm install @react-navigation/bottom-tabs
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <StatusBar style="auto" />
        <LogView />
      </View>
    </PaperProvider>
  );
}

// export default function App() {
//   return (
//     <PaperProvider>
//       {/* <View style={styles.container}> */}
//       <LogView />
//       {/* </View> */}
//       {/* <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="User" component={UserScreen} />
//         <Tab.Screen name="People" component={PeopleScreen} />
//       </Tab.Navigator>
//     </NavigationContainer> */}
//     </PaperProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
