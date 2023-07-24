import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/LoginStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Kirjaudu sisään
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Sähköposti"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Salasana"
        secureTextEntry
      />
      <TouchableOpacity 
        style={styles.forgotPassword} 
        onPress={() => console.log('Forgot Password')}
      >
        <Text style={styles.forgotPasswordText}>
          Unohtuiko salasana?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.loginButtonText}>
          Kirjaudu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
