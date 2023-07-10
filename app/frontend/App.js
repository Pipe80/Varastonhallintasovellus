import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./ids.jpeg')}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirjaudu sisään" onPress={() => console.log('Kirjaudu sisään')} color="#02718D" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Luo tili" onPress={() => console.log('Luo tili')} color="#02718D" />
      </View>
    </View>
  );
};

export default HomeScreen;
