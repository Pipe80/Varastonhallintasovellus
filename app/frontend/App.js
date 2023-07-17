import React from 'react';

// Import NativeBase
import { NativeBaseProvider } from 'native-base';
// Import Navigation fro test
import Navigation from './navigation/Navigation';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import Barcode from './components/Barcode';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Navigation/> */} // For testing if Feather started working but it does not work at all
      <NavigationContainer>      
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
    </NativeBaseProvider>
  );
};

export default App;
