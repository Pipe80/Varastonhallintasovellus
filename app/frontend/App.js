import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./ids2.png')}
      />
  
      <View style={styles.buttonContainer}>
        <Button title="Kirjaudu sisään" onPress={() => console.log('Kirjaudu sisään')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Luo tili" onPress={() => console.log('Luo tili')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bde0fe',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 90,

  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%', 
    marginVertical: 10,},

  subtitle: {
    fontSize: 18,
    color: '#888',
  },
});

export default HomeScreen;