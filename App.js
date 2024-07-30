import React, { useState, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ButtonScreen from  './components/ButtonsScreen';
import ListsScreen from './components/ListsScreen';
import ProfileScreen from './components/ProfileScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import AddToCartScreen from './components/AddToCartScreen';
import RequestAgentScreen from './components/RequestAgentScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ThemeContext = createContext();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Buttons') {
            iconName = 'home';
          } else if (route.name === 'Lists') {
            iconName = 'list';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'AddToCart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'RequestAgent') {
            iconName = 'phone';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Buttons" component={ButtonScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="AddToCart" component={AddToCartScreen} />
      <Tab.Screen name="RequestAgent" component={RequestAgentScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="AddToCart" component={AddToCartScreen} />
          <Stack.Screen name="RequestAgent" component={RequestAgentScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
