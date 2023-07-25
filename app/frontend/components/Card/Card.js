import React from 'react';
import { Box, Button, Text } from 'native-base';
import { styles } from './CardStyles';

const Card = ({ title, id, onPress, children }) => {
  return (
    <Box style={styles.card}>
      <Text style={styles.cardTitle}>{title}, tilausnumero: {id}<Button onPress={onPress} /></Text>
      {children}
    </Box>
  );
};

export default Card;
