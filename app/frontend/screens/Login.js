import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyles';
import { Flex } from 'native-base';
import CustomButton from '../components/Button/Button'

const LoginScreen = ({ navigation }) => {
  return (
    <Flex justifyContent="center" >
      <Text style={styles.headerTitle}>
        Kirjaudu sisään
      </Text>
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
      
      <CustomButton 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={styles.loginButtonText}>
          Kirjaudu
        </Text>
      </CustomButton>
    </Flex>
  );
};

export default LoginScreen;
