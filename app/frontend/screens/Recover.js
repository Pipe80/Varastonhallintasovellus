import React, { useState } from 'react';
import { Flex, Heading, Input } from 'native-base';
import CustomButton from '../components/Button/Button';

const Register = () => {
  const [email, setEmail] = useState('');
  //const [salasana, setSalasana] = useState('');

  const handleRegister = () => {
    const user = {
      email: email,
      salasana: salasana,
    };
    console.log(user); 
  };

  return (
    <Flex justifyContent="center">
      <Heading size="lg" color="black">
        Forgot password
      </Heading>
      <Input
        variant="filled"
        padding={3}
        placeholder="Email"
        width="80%"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <CustomButton onPress={handleRegister}>
        Send password
      </CustomButton> 
    </Flex>
  );
};

export default Register;
