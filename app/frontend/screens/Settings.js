import React, { useState } from 'react';
import { Flex, Input, Text, Switch, VStack, HStack, Spacer } from 'native-base';
import CustomButton from '../components/Button/Button';

const SettingsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotificationEnabled, setNotificationEnabled] = useState(true);

  const handleSaveSettings = () => {
    console.log('Settings saved:', { name, email, password, isNotificationEnabled });
    // Add logic to save the settings to the backend or storage
  };

  return (
    <Flex>
        <Text 
          fontSize="lg" 
          textAlign="left">
          Change your information
        </Text>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          variant="filled"
          padding={3}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          variant="filled"
          padding={3}
        />
        <Input
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Enter new password"
          variant="filled"
          padding={3}
        />
        <Text fontSize="lg">Notifications</Text>
        <HStack alignItems="center" width="80%">
          <Text>{isNotificationEnabled ? 'On' : 'Off'}</Text>
          <Spacer />
          <Switch
            isChecked={isNotificationEnabled}
            onToggle={() => setNotificationEnabled(!isNotificationEnabled)}
          />
        </HStack>

        <CustomButton onPress={handleSaveSettings}>Save</CustomButton>
        <CustomButton onPress={() => navigation.navigate('Login')}>Logout</CustomButton>

    </Flex>
  );
};

export default SettingsScreen;
