import React, { useState } from 'react';
import { Flex, Heading, Input, Alert, Icon, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';
import CustomButton from '../components/Button/Button';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <Heading size="lg" color="black">
      Register
    </Heading>
    <Input
      variant="filled"
      padding={3}
      width="80%"
      placeholder="Username"
      value={username}
      onChangeText={text => setUsername(text)}
    />
    <Input
      variant="filled"
      padding={3}
      width="80%"
      placeholder="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      keyboardType="email-address"
    />
    <Input
      variant="filled"
      padding={3}
      width="80%"
      placeholder="Password"
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry={!showPassword}
      InputRightElement={
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Icon
            as={Feather}
            name={showPassword ? 'eye' : 'eye-off'}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
    />
    <Input
      variant="filled"
      padding={3}
      width="80%"
      placeholder="Confirm Password"
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry={!showConfirmPassword}
      InputRightElement={
        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon
            as={Feather}
            name={showConfirmPassword ? 'eye' : 'eye-off'}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
    />
    <CustomButton onPress={handleRegister}>Register</CustomButton>
  </Flex>
  );
};

 

export default RegisterScreen;