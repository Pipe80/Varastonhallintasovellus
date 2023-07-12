import React, { useState } from 'react';
//import Navigation from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [text, onChangeText] = useState('Terve!')

  return (
    //<Navigation/ >
    <NavigationContainer>      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    marginLeft: 20,
  },
})

export default App;
