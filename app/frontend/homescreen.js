import React from 'react';
import { View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./ids2.png')}
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
