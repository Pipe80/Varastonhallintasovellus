import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'native-base';
import { styles } from './CardStyles';

const Card = ({ title, content, children, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Box style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent}>{content}</Text>      
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default Card;
