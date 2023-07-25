import React from 'react';
import { Flex } from 'native-base';

// Components
import Card from '../components/Card/Card';

// I have used 'Button' from native-base because I can't make onPress
// work with custom 'Button'.
//import Button from '../components/Button/Button'
import { Button } from 'native-base';

// Data test
import data from '../data/orders.json';


const OrdersScreen = ({ navigation }) => {
  // orderID is just so that I can test Collecting screen. Lassi :)
  const orderID = '64a550ad189b5d629f56282b'
  return (
    <Flex>
      {data.orders.map((order) => (
        <Card key={order.id} title={order.title}></Card>
      ))}

      {/* Next line is here just so that I can test Collecting screen. Lassi :)*/}
      <Button onPress={() => navigation.navigate('Collecting', { orderID: {orderID} })}>Valitse tilaus</Button>
    </Flex>
  );
};

export default OrdersScreen;
