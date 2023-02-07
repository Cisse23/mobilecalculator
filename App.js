//https://reactnavigation.org/ //https://reactnavigation.org/docs/tab-based-navigation/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons' //browse icons https://icons.expo.fyi/
import { NavigationContainer } from '@react-navigation/native'; //core komponentti joka tarvitaan kaikkiin navigointeihin.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import Calculator from './Calculator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Calculator'){
            iconName = focused ? 'ios-calculator' : 'ios-calculator-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Settings' component={Settings} />
        <Tab.Screen name='Calculator' component={Calculator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
