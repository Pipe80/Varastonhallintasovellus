import React from 'react';
import { Button } from 'native-base';
import { styles } from './ButtonStyles';

const CustomButton = ({ children }) => {
  return (
    <Button style={styles.button}>
        { children }
    </Button>
  );
};

export default CustomButton;
