import React from 'react';

// Styles
import { Box, Text } from 'native-base';
import { styles } from '../../styles/Navigation';

const HomeScreen = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Box>
      <Box style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Box>
    </Box>
  );
};

export default HomeScreen;