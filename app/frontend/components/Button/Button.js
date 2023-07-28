import React from 'react';
import { Button } from 'native-base';
import { styles } from './ButtonStyles';
import { colors } from '../../themes/Colors'

const CustomButton = ({ children, onPress, title }) => {
  const buttonStyles = {
    ...styles.button,
    backgroundColor: colors.primary,
  };
  return (
    <Button style={buttonStyles} onPress={onPress} title={title}>
      {children}
    </Button>
  );
};

export default CustomButton;
