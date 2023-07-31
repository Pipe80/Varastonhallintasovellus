import React from 'react';
import { Flex, Input, Heading, Button } from 'native-base';
import CustomButton from '../components/Button/Button';

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
      <Button 
        variant="link"
        onPress={() => navigation.navigate('Recover')}
      >
        Forgot Password?
      </Button>
      <CustomButton 
        onPress={() => navigation.navigate('Orders')}
      >
        Log in
      </CustomButton>
    </Flex>
  );
};

export default LoginScreen;
