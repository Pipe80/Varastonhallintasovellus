import React from 'react';
import { Flex } from 'native-base';
import styles from '../styles/CollectingStyles' 

// Components
import Card from '../components/Card/Card';

import CustomButton from '../components/Button/Button'
import { Text } from 'native-base';

// Data test
import data from '../data/orders.json';


const OrdersScreen = ({ navigation }) => {
  // orderID is just so that I can test Collecting screen. Regards: Lassi :)
  const orderID = '64a550ad189b5d629f56282b'
  return (
    <Flex>
      {data.orders.map((order) => (
        <Card key={order.id} title={order.title}></Card>
      ))}

      {/* Next line is here just so that I can test Collecting screen. Regards: Lassi :)*/}
      <CustomButton onPress={() => navigation.navigate('Collecting', { orderID: {orderID} })}>
        <Text style={styles.barcodeReaderButtonText}>Valitse tilaus</Text>
      </CustomButton>
    </Flex>
  );
};

export default OrdersScreen;
