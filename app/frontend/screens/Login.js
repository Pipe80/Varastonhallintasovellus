import React from 'react';
import styles from '../styles/LoginStyles';
import { Flex, Input, Heading } from 'native-base';
import CustomButton from '../components/Button/Button';

// In progress...
import { Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <Flex justifyContent="center" >
      <Heading size="lg" color="black">
        Log in
      </Heading>
      <Input
        variant="filled"
        padding={3}
        placeholder="Email"
      />
      <Input
        variant="filled"
        padding={3}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity 
        style={styles.forgotPassword} 
        onPress={() => navigation.navigate('Recover')}
      >
        <Text style={styles.forgotPasswordText}>
          Unohtuiko salasana?
        </Text>
      </TouchableOpacity>
      <CustomButton 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Orders')}
      >
        Log in
      </CustomButton>
    </Flex>
  );
};

export default LoginScreen;
