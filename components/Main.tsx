import LogView from './LogView';
const Tab = createBottomTabNavigator();
import Top from './Top';
import PeopleLog from './PeopleLog';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Dictionary from './Dictionary';

export default function Main() {
  return (
    // ioniconsのicon名
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Top') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Log') {
            iconName = 'people-outline';
          } else if (route.name === 'Dictionary') {
            iconName = 'book';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Profile" component={LogView} />
      <Tab.Screen name="Log" component={PeopleLog} />
      <Tab.Screen name="Dictionary" component={Dictionary} />
    </Tab.Navigator>
  );
}
