import React from 'react';
import { View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import logo from '../assets/logo.png';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirjaudu sisään" onPress={handleLogin} color="#02718D" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Luo tili" onPress={() => console.log('Luo tili')} color="#02718D" />
      </View>
    </View>
  );
};

export default HomeScreen;
