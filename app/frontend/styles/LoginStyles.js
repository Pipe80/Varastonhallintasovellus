import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BAE7F7',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#02718D',
    width: 292,
    height: 52,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    //paddingVertical: 20,
    backgroundColor: '#02718D',
    alignSelf: 'stretch',
    width: 360, 
    height: 74,
  }, 
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
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
  forgotPassword: {
    marginTop: 10,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#888',
    textDecorationLine: 'underline',
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: '#02718D',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width: 200, 
    height: 50, 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
