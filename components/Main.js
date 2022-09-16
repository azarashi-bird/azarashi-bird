import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import LogTable from './LogTable';
import LogView from './LogView';
const Tab = createBottomTabNavigator();
import Top from './top';
import PeopleLog from './PeopleLog';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function Main() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Top} />
      <Tab.Screen name="LogView" component={LogView} />
      <Tab.Screen name="People" component={PeopleLog} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
