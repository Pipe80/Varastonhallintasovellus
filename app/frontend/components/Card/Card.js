import React from 'react';
import { Box, Button, Text } from 'native-base';
import { styles } from './CardStyles';

const Card = ({ title, content, children }) => {
  return (
    <Box style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>      
      {children}
    </Box>
  );
};

export default Card;
