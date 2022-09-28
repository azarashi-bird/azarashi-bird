import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  peopleTable: {
    backgroundColor: '#F6F3CF',
  },
  bird: {
    top: 450,
    left: 100,
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  topBird: {
    top: 170,
    left: 90,
    width: 200,
    height: 250,
  },
  cage: {
    width: 400,
    height: 550,
  },
  topCage: {
    width: 400,
    height: 550,
    top: -260,
  },
  innerContainer: {
    position: 'relative',
    flex: 1,
  },
  input: {
    width: '80%',
    margin: 10,
    marginBottom: 0,
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
    flexGrow: 1,
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
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    fontSize: 18,
    color: 'white',
  },
  FBMessage: {
    fontSize: 18,
    marginTop: 5,
    lineHeight: 30,
  },
  suggestContainer: {
    alignItems: 'flex-start',
    width: '80%',
    backgroundColor: 'white',
    marginTop: 0,
    padding: 10,
  },
  suggestText: {
    fontSize: 18,
    marginTop: 5,
  },
  FBMessageContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  // calender
  calender: {
    width: '56%',
    borderWidth: 0,
    borderColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calenderCell: {
    width: '20%',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  calenderCell0: {
    backgroundColor: 'blue',
    opacity: 0.03,
  },
  calenderCell1: {
    opacity: 0.2,
  },
  calenderCell2: {
    opacity: 0.3,
  },
  calenderCell3: {
    opacity: 0.4,
  },
  calenderCell4: {
    opacity: 0.5,
  },
  calenderCell5: {
    opacity: 0.6,
  },
  calenderText: {
    display: 'none',
  },
  afterButtonWrapper: {
    bottom: 80,
    width: '50%',
    alignItems: 'center',
  },
  afterPostIcon: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  afterPostBg: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  afterInnerContainer: {
    top: 45,
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
  },
  afterPostCount: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  FBMessageSP: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 35,
    opacity: 0.98,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbutton: {
    borderRadius: 13,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'orange',
    opacity: 0.8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText2: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
