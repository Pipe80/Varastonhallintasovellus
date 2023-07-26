import React from 'react';
import { Button } from 'native-base';
import { styles } from './ButtonStyles';
import { colors } from '../../themes/Colors'

const CustomButton = ({ children, onPress }) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: colors.primary,
  };
  return (
    <Button style={buttonStyles} onPress={onPress} >
      {children}
    </Button>
  );
};

export default CustomButton;
