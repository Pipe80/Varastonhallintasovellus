import React from 'react';

// Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OrdersScreen from './screens/OrdersScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Navigation = ()  => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        headerStyle: { 
          backgroundColor: '#fff',
          height: 100,
        },
        headerTintColor: '#000',
        tabBarActiveTintColor: '#02718D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          paddingVertical: 5,
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          backgroundColor:'white',
          position:'absolute',
          height:100,
        },
        tabBarLabelStyle: {
          display: "none"
        },
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name ="home" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="package" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;