import React from 'react';
import { Input } from 'native-base';
import { styles } from './InputStyles';

const CustomInput = ({ placeholder, ...rest }) => {
  return (
    <Input style={styles.input} placeholder={placeholder} {...rest} />
  );
};

export default CustomInput;
