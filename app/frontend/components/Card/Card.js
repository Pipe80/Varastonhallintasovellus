import React from 'react';
import { Box, Text } from 'native-base';
import { styles } from './CardStyles';

const Card = ({ title, children }) => {
  return (
    <Box style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </Box>
  );
};

export default Card;
