import React, { useState } from 'react';
import { TextInput, Text, Alert, View } from 'react-native';
import styles from '../styles/RegisterStyles';
import { Flex, Button } from 'native-base';
import CustomButton from '../components/Button/Button';
import { Feather } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const newUser = {
      username: username,
      email: email,
      password: password
    };

    // Make an HTTP POST request to the backend server
    fetch('YOUR_BACKEND_API_ENDPOINT/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(data => {
        // Assuming the backend responds with a success status
        // (You can define what success/failure means in your API)
        Alert.alert('Registration successful!');
        navigation.navigate('MainApp'); // Navigate to the main app screen after successful registration
      })
      .catch(error => {
        // Handle any errors that occurred during the registration process
        Alert.alert('Registration failed. Please try again.');
        console.error('Error during registration:', error);
      });
  };

 
  return (
    <Flex justifyContent="center">    
      <Text style={styles.headerTitle}>Luo tili</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />  
          
      <CustomButton onPress={handleRegister}>
        <Text style={styles.buttonText}>Rekisteröidy</Text>
      </CustomButton> 
    </Flex>
  );
};

 

export default RegisterScreen;