import { useState, useRef } from 'react';
import { Keyboard, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from '../styles/BarcodeStyles'

export default function Barcode(props) {  
  // Create a reference to be used in TextInput component that
  // receives the barcode
  const barcodeRef = useRef()

  // This handles 'Lue viivakoodi'-Button press
  const readBarcode = () => {
    // Focus on TextInput component
    barcodeRef.current.focus()
    // Clear TextInput component
    barcodeRef.current.clear()
    // Empty old barcodes stored in state
    props.changeBarcode('')
  }

  // This handles TextInput component for barcode reading
  const barcodeChanger = (barcode) => {
    props.changeBarcode(barcode)
  }

  return (
    // Zebra DataWedge sends barcodes as keystrokes. So we need
    // to have something to receive these keystokes. This is done
    // by TextInput component. TextInput component needs to have focus
    // in order to receive keystrokes. This is achieved by 
    //'Lue viivakoodi'-button that put's focus on TextInput component.
    <View style={styles.container}>       
      <TextInput 
        style={styles.input}
        ref={barcodeRef}
        onFocus={Keyboard.dismiss}
        onChangeText={(barcode) => barcodeChanger(barcode)}
      />
      <TouchableOpacity style={styles.barcodeReaderButton} onPress={readBarcode}>
        <Text style={styles.barcodeReaderButtonText}>Lue viivakoodi</Text>
      </TouchableOpacity>      
      <Text>Viivakoodi on: {props.barcode}</Text>
    </View>
  );
}
