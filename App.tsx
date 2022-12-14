import {FlyingBird} from './components/FlyingBird';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {incUserPostCount} from './firebase';

// toku_tableの中身をusersに転記していく　usersを作ってから1回目だけ読み込ませる
// const setUsersCollection = async () => {
//   const allTokus = await getAllToku();
//   console.log(allTokus);
//   for (const toku of allTokus) {
//     await incUserPostCount(toku.user_id);
//   }
//   console.log('SERUSER COLLECTION CALLED PLZ CALL ONLY ONCE');
// };
// setUsersCollection();

// responsive

// import {
//   iPhoneInch47,
//   iPhoneInch55,
//   iPhoneInch58,
//   iPhoneInch65,
//   iPad129,
//   iPad11,
//   iPad97,
// } from './lib/iPhoneSize';

const {width, height} = Dimensions.get('window');

// メモ：npm install @react-navigation/bottom-tabs
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import Top from './components/Top';
import Main from './components/Main';
import {LogBox} from 'react-native';
import AfterFlying from './components/AfterFlying';

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
      <>
        {/* <View> */}
        {/* {console.log(
          iPhoneInch47()
            ? `iPhone 6, 7, 8, SE(第2世代)です。 width: ${width}, height: ${height}`
            : iPhoneInch55()
            ? `iPhone 6s, 7Plus, 8Plusです。 width: ${width}, height: ${height}`
            : iPhoneInch58()
            ? `iPhone x, xs, 11Proです。 width: ${width}, height: ${height}`
            : iPhoneInch65()
            ? `iPhone xr, xsMax, 11, 11proMaxです。 width: ${width}, height: ${height}`
            : null
        )} */}
        {/* <Text>nothing</Text> */}
        {/* </View> */}
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
            <Stack.Screen name="AfterFlying" component={AfterFlying} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
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
