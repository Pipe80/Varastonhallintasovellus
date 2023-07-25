import { useState, useEffect, useRef } from 'react';
import { TextInput, View, Keyboard, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/CollectingStyles'
import { Flex, Text, ScrollView, Button } from 'native-base';
import Card from '../components/Card/Card'
import CustomButton from '../components/Button/Button'

export default function Collecting({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
    
  const barcodeRef = useRef()

  // orderID is passed on by 'Orders' screen through route parameters
  const { orderID } = route.params
  
  // get IPv4 for your Windows machine:
  //      - start terminal and type 'ipconfig'  
  const computerIPv4 = '192.168.100.105'
  
  // fetch data asynchronously from backend
  const getItems = async () => {
    await fetch('http://' + computerIPv4 + ':3000/api/getOrderById/' + orderID.orderID)
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
      if (loopElement.product_id === barcode && loopElement.pcs === 0) {
        Alert.alert('Huomio!', `Tämä tuote on jo keräilty valmiiksi!`, 
            [
              {
                text: 'OK'
              }
            ]   
            )
      }
      if (loopElement.product_id === barcode && loopElement.pcs > 0) {
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
      navigation.navigate('Orders')
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
      <ScrollView>
        <Flex>
          <View style={styles.header}>
            <Button 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="white" />
            </Button>       
            <Text style={styles.headerTitle}>Keräily</Text>
          </View> 
            {order.order.items.item.map((item) => (                      
              <Card key={item.name} title={item.name}>{'id: ' + item.product_id + ', puuttuu: ' + item.pcs + 'kpl'}</Card>
            ))}
            
            <TextInput 
              style={styles.input}
              ref={barcodeRef}
              onFocus={Keyboard.dismiss}
              onChangeText={(barcode) => barcodeChanger(barcode)}
            />
            <CustomButton  onPress={ChangeStatus}>
              <Text style={styles.barcodeReaderButtonText}>Lue viivakoodi</Text>
            </CustomButton> 
        </Flex>
      </ScrollView>
    );
  }
}

