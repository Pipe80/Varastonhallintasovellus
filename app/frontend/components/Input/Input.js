import React from 'react';
import { Input } from 'native-base';

const CustomInput = ({ variant, placeholder, containerStyle, inputStyle, ...restProps }) => {
  const inputContainerStyle = {
    width: "20%",
    ...containerStyle,
  };

  const inputStyles = {
    ...inputStyle,
  };

  return (
    <Input
      variant={variant}
      placeholder={placeholder}
      style={inputContainerStyle}
      _input={inputStyles}
      {...restProps}
    />
  );
};

export default CustomInput;
