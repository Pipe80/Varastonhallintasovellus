import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/BarcodeStyles'

export default function Collecting() {
  const [items, setItems] = useState({})
  const orderID = '64a550ad189b5d629f56282b'
  const getItems = () => {
    fetch('')
  }

  const items2 = [
    {
      "name": "Nappi",
      "pcs": 10,
      "product_id": "1",
      "item_status": "Not collected",
      "_id": "64abc08e30b34928714190ae"
    },
    {
      "name": "Lanka",
      "pcs": 1,
      "product_id": "2",
      "item_status": "Not collected",
      "_id": "64abc08e30b34928714190af"
    },
    {
      "name": "Ohje",
      "pcs": 1,
      "product_id": "3",
      "item_status": "Not collected",
      "_id": "64abc08e30b34928714190b0"
    }
  ]  

  return (
    <View style={styles.container}>
      <FlatList 
        data={items2}
        renderItem={({item}) => <Text>{item.name}, {item.pcs} kappaletta</Text>}
      />
    </View>
  );
}
