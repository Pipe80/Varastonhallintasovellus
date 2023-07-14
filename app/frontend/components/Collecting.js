import { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/BarcodeStyles'

export default function Collecting() {
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState({})

  const orderID = '64a550e1189b5d629f562835'
  const getItems = () => {
    fetch('http://127.0.0.1:3000/api/getOrderById/' + orderID)
    .then(res => res.json())
    .then(json => setOrder(json))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true);
    getItems()
  }, [])
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={order.order.items.item}
        renderItem={({item}) => <Text>tuote: {item.name}, id: {item.product_id}, {item.pcs} kappaletta</Text>}
      />
    </View>
  );
}
