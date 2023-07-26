import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/RecoverStyles';
import { AntDesign } from '@expo/vector-icons';

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

  const handleBackButton = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Text style={styles.headerTitle}><AntDesign name="arrowleft" size={24} color="white" /></Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Salasanan vaihto</Text>
      </View>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />

      <Button
        title="Lähetä"
        onPress={handleRegister}
        color="#02718D"
      />
    </View>
  );
};

export default Register;
