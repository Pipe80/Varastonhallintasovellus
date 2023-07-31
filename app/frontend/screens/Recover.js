import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';
import styles from '../styles/RegisterStyles';
import { Flex } from 'native-base';
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
        <Text style={styles.headerTitle}>Salasanan vaihto</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />

      <CustomButton onPress={handleRegister}>
        <Text style={styles.buttonText}>Rekisteröidy</Text>
      </CustomButton> 
    </Flex>
  );
};

export default Register;
