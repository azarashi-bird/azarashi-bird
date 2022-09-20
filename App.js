import {FlyingBird} from './components/FlyingBird';
import {StyleSheet, Text, View} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

// メモ：npm install @react-navigation/bottom-tabs
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import Top from './components/top';
import Main from './components/Main';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

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
    // <PaperProvider theme="{theme}">
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         options={{headerShown: false}}
    //         name="Login"
    //         component={LoginScreen}
    //       />
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //     </Stack.Navigator>
    //     <Top />
    //     <View style={styles.container}>
    //       <FlyingBird />
    //       <StatusBar style="auto" />
    //     </View>
    //   </NavigationContainer>
    // </PaperProvider>
    <PaperProvider theme="{theme}">

   


      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Top" component={Top} />
          <Stack.Screen name="FlyingBird" component={FlyingBird} />
        </Stack.Navigator>
      </NavigationContainer> 
    </PaperProvider>
  );
}

const Stack = createNativeStackNavigator();
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
