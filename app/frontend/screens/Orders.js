import React from 'react';
import { Box } from 'native-base';
import { styles } from '../styles/Navigation';

// Components
import Card from '../components/Card/Card'; 

// Data test
import data from '../data/orders.json';

const OrdersScreen = () => {
  return (
    <Box style={styles.container}>
      {data.orders.map((order) => (
        <Card key={order.id} title={order.title}></Card>
      ))}
    </Box>
  );
};

export default OrdersScreen;
