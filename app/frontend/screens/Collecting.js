import { useState, useEffect, useRef } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity, Keyboard, Alert } from 'react-native';
import styles from '../styles/CollectingStyles'

export default function Collecting() {
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  
  const barcodeRef = useRef()

  // orderID comes from parent component, props?
  const orderID = '64a550ad189b5d629f56282b'
  // get IPv4 for your Windows machine:
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

  // This handles 'Lue viivakoodi'-Button press
  const ChangeStatus = () => {
    // Focus on TextInput component
    barcodeRef.current.focus()
    // Clear TextInput componentj
    barcodeRef.current.clear()    
  }

  // This handles TextInput component for barcode reading
  const barcodeChanger = (barcode) => {
    console.log('')
    console.log('ChangeStatus():')
    console.log('Barcode: ' + barcode)
    let arrayLength = order.order.items.item.length
    for (let i = 0; i < arrayLength; i++) {
      console.log(order.order.items.item[1].item_status)
      const loopElement = order.order.items.item[i]
      if (loopElement.product_id === barcode) {
        // Create a copy of order with a new memory reference.
        // This is done to force a render with setOrder. 
        // Using just setOrder will modify data in the same memory
        // reference and will not cause a render.
        let changedOrder = {...order}
        // Remove on pcs
        changedOrder.order.items.item[i].pcs += -1        
        setOrder(changedOrder)
        // Check if last pcs was collected
        if (changedOrder.order.items.item[i].pcs === 0) {
          changedOrder.order.items.item[i].item_status = 'Collected'
          Alert.alert('Huomio!', `Viimeinen kappale tuotetta "${changedOrder.order.items.item[i].name}" kerätty.`, 
            [
              {
                text: 'OK'
              }
            ]   
            )
        }
        console.log(order.order.items.item[i].item_status)
      }
    }
  }

  // This controls 'OK' button press from 'Kaikki tilauksen "order_id"
  // tuotteet on keräilty' alert
  const collectingDone = async () => {
    order.order.order_status = 'Collected'

    // Request to backend:
    //    - all items => 'Collected'
    //    - order => 'Collected'
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    };
    await fetch('http://' + computerIPv4 + ':3000/api/collectedOrder/' + orderID, requestOptions)
      .then(res => res.json())

  }

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
    let arrayLength = order.order.items.item.length
    let collectingStatus = []
    for (let i = 0; i < arrayLength; i++) {
      collectingStatus.push(order.order.items.item[i].item_status)      
    }
    // Check if there are still items left for collecting
    if (collectingStatus.indexOf('Not collected') === -1) {
      Alert.alert('Huomio!', `Kaikki tilauksen "${order.order.order_id}" tuotteet on keräilty`,
        [
          {
            text: 'OK',
            onPress: collectingDone
          }
        ]
      )
    }

    return (      
        <View style={styles.container}>

          <View style={styles.header}>        
            <Text style={styles.headerTitle}>Keräily</Text>
          </View>   
          <FlatList
            data={order.order.items.item}
            renderItem={
              ({item}) => <Text style={styles.list}>{item.name}, id: {item.product_id}, {item.pcs} kpl, {item.item_status}</Text>}
          />
          
          <View>
            <TextInput 
              style={styles.input}
              ref={barcodeRef}
              onFocus={Keyboard.dismiss}
              onChangeText={(barcode) => barcodeChanger(barcode)}
            />
            <TouchableOpacity style={styles.barcodeReaderButton} onPress={ChangeStatus}>
              <Text style={styles.barcodeReaderButtonText}>Lue viivakoodi</Text>
            </TouchableOpacity>  
          </View>          
          
        </View>
      
    );
  }
  
}

