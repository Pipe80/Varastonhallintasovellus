import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/Styles';



const RegisterScreen = (navigation) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const navigation = {
      username: username,
      email: email,
      password: password
    };

    // Perform registration logic here (e.g., API call to register the user)

    // Assuming successful registration, navigate to the "MainApp" screen
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      onPress={() => navigation.navigate('Details')}
    </View>
  );
};

export default RegisterScreen;
