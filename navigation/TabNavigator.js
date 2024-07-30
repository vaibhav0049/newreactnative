import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ButtonsScreen from '../components/ButtonsScreen';
import ProfileScreen from '../components/ProfileScreen';
import ListsScreen from '../components/ListsScreen';

import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Buttons" component={ButtonsScreen} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />)}} />
        <Tab.Screen name="Lists" component={ListsScreen} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="list" color={color} size={size} />)}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
