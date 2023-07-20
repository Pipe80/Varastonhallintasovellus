import React from 'react';
import { NativeBaseProvider } from 'native-base';

// Fonts
import { loadFonts } from './styles/Fonts';

// Global styles
import { theme } from './themes/Theme';

// Screens
import HomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
// import Barcode from './screens/Barcode';
// other components here ...

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation/Navigation'; 

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    loadFonts();
  }, []);

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
