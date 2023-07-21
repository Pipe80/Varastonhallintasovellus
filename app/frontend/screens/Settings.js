import React, { useState } from 'react';
import { Flex, VStack, Text } from 'native-base';

// NOTE
// Work in progress in this file

//Components
import Button from '../components/Button/Button';
import Input from '../components/Input/Input/';

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
      <VStack>
          <Text>Change your password</Text>
          <Input
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter new password"
          />
        <Button onPress={saveSettings}>
          Save
        </Button>
      </VStack>
    </Flex>
  );
};

export default SettingsScreen;
