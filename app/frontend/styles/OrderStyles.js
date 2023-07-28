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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;
