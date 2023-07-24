import React from 'react';
import { Flex } from 'native-base';

// Components
import Card from '../components/Card/Card';

// Data test
import data from '../data/orders.json';

const OrdersScreen = () => {
  return (
    <Flex>
      {data.orders.map((order) => (
        <Card key={order.id} title={order.title}></Card>
      ))}
    </Flex>
  );
};

export default OrdersScreen;
