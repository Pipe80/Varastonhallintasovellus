import React, { useState } from 'react';

// Styles
import { Box, Text, Input, VStack, Button } from 'native-base';
import { styles } from '../styles/Navigation';

// NOTE
// Work in progress in this file

const SettingsScreen = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const saveSettings = () => {
    console.log('Settings saved:', { password });
  };

  return (
    <Box style={styles.container}>
      <VStack style={styles.vStack}>
        <Box>
          <Text>Change your password</Text>
          <Input
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter new password"
          />
        </Box>
        <Button onPress={saveSettings} style={styles.button}>
          Save
        </Button>
      </VStack>
    </Box>
  );
};

export default SettingsScreen;
