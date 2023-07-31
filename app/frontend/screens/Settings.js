import React, { useState } from 'react';
import { Flex, Stack, Text } from 'native-base';

// NOTE
// Work in progress in this file

//Components
import CustomButton from '../components/Button/Button';
import CustomInput from '../components/Input/Input';

const SettingsScreen = () => {
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
          <CustomInput
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter new password"
          />
        <CustomButton onPress={saveSettings}>
          Save
        </CustomButton>
    </Flex>
  );
};

export default SettingsScreen;
