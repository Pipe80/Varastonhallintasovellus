import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/Login';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Kirjautumisen käsittely
    console.log('Kirjaudu sisään');
  };

  const handleForgotPassword = () => {
    // Unohtuneen salasanan käsittely
    console.log('Unohtuiko salasana');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kirjaudu sisään</Text>
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
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Unohtuiko salasana?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Kirjaudu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
