import React from 'react';
import { Button, Text } from 'native-base';
import { styles } from './ButtonStyles';
import { colors } from '../../themes/Colors';

const CustomButton = ({ children, onPress, backgroundColor, textColor }) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: backgroundColor || colors.primary,
  };

  const buttonTextStyles = {
    ...styles.buttonText,
    color: textColor || colors.white,
  };

  return (
    <Button style={buttonStyles} onPress={onPress}>
      <Text style={buttonTextStyles}>{children}</Text>
    </Button>
  );
};

export default CustomButton;
