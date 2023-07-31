import React, { useState } from 'react';
import { Flex, Input, Heading, Button, Icon, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons'; 
import CustomButton from '../components/Button/Button';

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <Flex justifyContent="center">
      <Heading size="lg" color="black">
        Log in
      </Heading>
      <Input
        variant="filled"

        placeholder="Email"
      />
      <Input
        variant="filled"
        padding={3}
        type={show ? "text" : "password"} 
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={<Feather name={show ? "eye" : "eye-off"} />} 
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Password"
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
