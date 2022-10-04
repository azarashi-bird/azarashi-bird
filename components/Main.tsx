import Profile from './Profile';
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

          if (route.name === 'ホーム') {
            iconName = 'home';
          } else if (route.name === '来世の姿') {
            iconName = 'person';
          } else if (route.name === '記録') {
            iconName = 'document-text';
          } else if (route.name === '来世図鑑') {
            iconName = 'book';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="ホーム" component={Top} />
      <Tab.Screen name="来世の姿" component={Profile} />
      <Tab.Screen name="記録" component={PeopleLog} />
      <Tab.Screen name="来世図鑑" component={Dictionary} />
    </Tab.Navigator>
  );
}
