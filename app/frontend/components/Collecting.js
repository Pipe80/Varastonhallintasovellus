import { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Barcode from './Barcode';
import styles from '../styles/CollectingStyles'

export default function Collecting() {
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  // Decleare a variable for storing a barcode 
  const [barcode, changeBarcode] = useState('2');

  // orderID comes from parent component, props?
  const orderID = '64a550ad189b5d629f56282b'
  // get IPv4 for your 
  //    Windows machine:
  //      - start terminal and type 'ipconfig'  
  const computerIPv4 = '192.168.100.105'
  
  // fetch data asynchronously from backend
  const getItems = async () => {
    await fetch('http://' + computerIPv4 + ':3000/api/getOrderById/' + orderID)
    .then(res => res.json())
    .then(json => setOrder(json))    
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  // run setLoading() and getItems() on each render
  useEffect(() => {
    setLoading(true);
    getItems()
  }, [])  // <-- empty brackets makes useEffect run only once

  // if still loading return 'Ladataan'
  if (isLoading === true) {
    return (
      <View style={styles.container}>
        <Text>Ladataan</Text>
      </View>
    )
  }

  // if loading is complete return data
  if (isLoading === false) {
    return (      
        <View style={styles.container}>
          <View style={styles.header}>        
            <Text style={styles.headerTitle}>Keräily</Text>
          </View>     
          <FlatList style={styles.list}
            data={order.order.items.item}
            renderItem={
              ({item}) => <Text style={styles.input}>tuote: {item.name}, id: {item.product_id}, {item.pcs} kappaletta</Text>}
          />
          <Barcode barcode={barcode} changeBarcode={changeBarcode}/>
        </View>
      
    );
  }
  
}
