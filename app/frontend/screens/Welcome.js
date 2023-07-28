import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { Flex } from 'native-base'
import styles from '../styles/WelcomeStyles';
import logo from '../assets/logo.png';
import CustomButton from '../components/Button/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <Flex>
      <Image
        style={styles.logo}
        source={logo}
      />
            
      <CustomButton onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Kirjaudu sisään</Text>
      </CustomButton> 

      <CustomButton onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Luo tili</Text>
      </CustomButton>      
    </Flex>
  );
};

export default HomeScreen;
