// Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Screens import to bottom navigation
import HomeScreen from '../screens/Home';
import OrdersScreen from '../screens/Orders';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Orders: 'package',
          Settings: 'settings',
        };
        const iconName = icons[route.name];
        return <Feather name={iconName} color={color} size={size} />;
      },
      tabBarActiveTintColor: "#02718D",
      tabBarInactiveTintColor: "gray",
      tabBarLabelStyle: {
        display: "none"
      },
      tabBarStyle: [
        {
          display: "flex",
          height: 100
        },
        null
      ]
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default Navigation;
