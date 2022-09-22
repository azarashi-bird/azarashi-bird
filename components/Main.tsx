import LogView from './LogView';
const Tab = createBottomTabNavigator();
import Top from './Top';
import PeopleLog from './PeopleLog';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

export default function Main() {
  return (
    // ioniconsのicon名
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Log') {
            iconName = 'book';
          } else if (route.name === 'People') {
            iconName = 'people-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Top} />
      <Tab.Screen name="Log" component={LogView} />
      <Tab.Screen name="People" component={PeopleLog} />
    </Tab.Navigator>
  );
}
