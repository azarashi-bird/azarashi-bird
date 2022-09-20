import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bird: {
    top: 450,
    left: 100,
    width: 200,
    height: 250,
    // transform: [{translateX: 100}],
  },
  cage: {
    width: 400,
    height: 550,
  },
  innerContainer: {
    position: 'relative',
    flex: 1,
  },
  input: {
    width: 100,
  },
  appTitle: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  topContent: {
    marginTop: 100,
  },
  mainImage: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  mainText: {
    marginTop: 50,
  },
  strongText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  logContainer: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tableContainer: {
    margin: 8,
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
    width: 350,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInputContainer: {
    width: '80%',
  },
  loginInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  loginButtonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button1: {
    // login
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  button1Text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  loginButtonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  loginButtonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  button2: {
    backgroundColor: '#0782f9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  // innerContainer2: {
  //   flex: 1,
  // },
});

export default styles;
