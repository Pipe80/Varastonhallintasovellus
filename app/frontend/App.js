import React from 'react';
import { NativeBaseProvider } from 'native-base';

// Global styles
import { theme } from './themes/Theme';

// Screens
import HomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Register';
import RecoverScreen from './screens/Recover';
// other components here ...
import CollectingScreen from './screens/Collecting'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation/Navigation'; 

const Stack = createStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>      
        <Stack.Navigator>         
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // No header for screens like in mockup
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Orders"
            component={Navigation}
          />
          <Stack.Screen
            name="Collecting"
            component={CollectingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recover"
            component={RecoverScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </NativeBaseProvider>
  );
};

export default App;