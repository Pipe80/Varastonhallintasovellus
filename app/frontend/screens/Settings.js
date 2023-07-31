import React, { useState } from 'react';
import { Flex, Input, Text } from 'native-base';

// NOTE
// Work in progress in this file

//Components
import CustomButton from '../components/Button/Button';
// import CustomInput from '../components/Input/Input';

const SettingsScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const saveSettings = () => {
    console.log('Settings saved:', { password });
  };

  return (
    <Flex>
      <Text>Change your password</Text>
        <Input
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter new password"
          variant="filled"
          width="80%"
          padding={3}
        />
        <CustomButton onPress={saveSettings}>
          Save
        </CustomButton>
        <CustomButton
          onPress={() => {navigation.navigate('Login');}}
        >
          Logout
        </CustomButton>
    </Flex>
  );
};

export default SettingsScreen;
