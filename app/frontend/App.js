import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};

export default App;
