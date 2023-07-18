import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BAE7F7',
  },
  input: {
    width: 292,
    height: 52,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },  
  barcodeReaderButton: {
    backgroundColor: '#02718D',
    paddingHorizontal: 41,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width: 200, 
    height: 50, 
  },
  barcodeReaderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
