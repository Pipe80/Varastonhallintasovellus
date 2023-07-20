import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginStyles';
import logo from '../assets/logo.png';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <TouchableOpacity style={styles.button}
                        onPress={handleLogin} 
      >
        <Text style={styles.title}>Kirjaudu sisään</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
                        onPress={handleSignup} 
      >
        <Text style={styles.title}>Luo tili</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
