import React from 'react';
import logo from '../assets/logo.png';
import CustomButton from '../components/Button/Button';
import { Flex, Image } from 'native-base';

const HomeScreen = ({ navigation }) => {
  return (
    <Flex justifyContent="center">
      <Image
        width="200"
        height="150"
        source={logo}
        alt='logo'
      />      
      <CustomButton onPress={() => navigation.navigate('Login')}>
        Log in
      </CustomButton>
      <CustomButton onPress={() => navigation.navigate('SignUp')}>
        Create account
      </CustomButton>      
    </Flex>
  );
};

export default HomeScreen;
