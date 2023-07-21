import React from 'react';
import { Button } from 'native-base';
import { styles } from './ButtonStyles';

const Card = ({ children }) => {
  return (
    <Button style={styles.button}>
        { children }
    </Button>
  );
};

export default Card;
