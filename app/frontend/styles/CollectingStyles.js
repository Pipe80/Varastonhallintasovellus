import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#02718D',
    alignSelf: 'stretch',
    width: 360, 
    height: 74,
  }, 
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    paddingTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: 292,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 10,    
    backgroundColor: 'white'
  },
  barcodeReaderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;
