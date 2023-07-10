import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BAE7F7',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  buttonContainer: {
    backgroundColor: '#02718D',
    width: '50%',
    height: 37,
    marginVertical: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#02718D',
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
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  forgotPassword: {
    marginTop: 10,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#888',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#02718D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
