import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import screens
import DashboardScreen from './src/screens/DashboardScreen';
import SitesMapScreen from './src/screens/SitesMapScreen';
import ActiveJobScreen from './src/screens/ActiveJobScreen';
import OrderWaterScreen from './src/screens/OrderWaterScreen';
import EarningsScreen from './src/screens/EarningsScreen';

// Colors from design
const COLORS = {
  purple: '#6B3BA0',
  green: '#00A651',
  white: '#FFFFFF',
  darkGray: '#333333',
  lightGray: '#F0F0F0',
  border: '#C8C8C8'
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sites') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Job') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Water') {
              iconName = focused ? 'water' : 'water-outline';
            } else if (route.name === 'Earnings') {
              iconName = focused ? 'cash' : 'cash-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.green,
          tabBarInactiveTintColor: COLORS.darkGray,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.border,
            borderTopWidth: 1,
            paddingBottom: 5,
            height: 60
          }
        })}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen 
          name="Sites" 
          component={SitesMapScreen}
          options={{ tabBarLabel: 'Sites' }}
        />
        <Tab.Screen 
          name="Job" 
          component={ActiveJobScreen}
          options={{ tabBarLabel: 'Job' }}
        />
        <Tab.Screen 
          name="Water" 
          component={OrderWaterScreen}
          options={{ tabBarLabel: 'Water' }}
        />
        <Tab.Screen 
          name="Earnings" 
          component={EarningsScreen}
          options={{ tabBarLabel: 'Earnings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
