import React, { useEffect } from 'react';

// Fonts
import { loadFonts } from './styles/Fonts';

// Import NativeBase
import { NativeBaseProvider } from 'native-base';
import Navigation from './navigation/Navigation'; // Import Navigation for test

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
// import Barcode from './components/Barcode';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NativeBaseProvider>
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainApp"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </NativeBaseProvider>
  );
};

export default App;
