import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/LoginStyles';
import logo from '../assets/logo.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.title}>Kirjaudu sisään</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')} 
      >
        <Text style={styles.title}>Luo tili</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
