import React from 'react';
import { useState, useEffect } from 'react';
import { Flex, ScrollView, Text } from 'native-base';
import styles from '../styles/CollectingStyles' 

// Components
import Card from '../components/Card/Card';

import CustomButton from '../components/Button/Button'

// Data test
import data from '../data/orders.json';

const OrdersScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [openOrders, setOpenOrders] = useState({});

  // get IPv4 for your Windows machine:
  //      - start terminal and type 'ipconfig'  
  const computerIPv4 = '192.168.100.105'
  
  // fetch data asynchronously from backend
  const getOpenOrders = async () => {
    await fetch('http://' + computerIPv4 + ':3000/api/getOpenOrders/')
    .then(res => res.json())
    .then(json => setOpenOrders(json))    
    .catch(error => console.log(error))
    .finally(() => setLoading(false))    
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      setLoading(true)
      getOpenOrders()
    })    
  }, [])

  if (isLoading === true) {
    return (
      <Flex>
        <Text>Ladataan</Text>
      </Flex>
    )
  }
  
  if (isLoading === false) {
    
    return (
      <ScrollView>
        <Flex>
          {openOrders.map((order) => (          
            <Card 
              key={order._id} 
              title={order.order.customer} 
              id={order._id}>
              <CustomButton onPress={(id) => {
                  let orderID = order._id
                  navigation.navigate('Collecting', { orderID: {orderID} })
                }}>
                <Text style={styles.barcodeReaderButtonText}>Valitse</Text>
              </CustomButton>
            </Card>
          ))}
        </Flex>
      </ScrollView>
    );
  }
};

export default OrdersScreen;
