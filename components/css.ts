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
    // width: '60%',
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
  },
  buttonWrapper: {
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  calender: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calenderCell: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  calenderCellEmpty: {
    backgroundColor: 'inherit',
  },
  calenderCellMarked: {
    backgroundColor: 'orange',
  },
  calenderText: {
    display: 'none',
  },
  afterButtonWrapper: {
    left: 80,
    bottom: 100,
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
    // borderRadius: 50,
    // opacity: 0.6,

    // backgroundColor:"rgba(255, 255, 255, 0.5)",    // overflow: "hidden"
  },
  afterPostBg2: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    // borderRadius: 50,
    // opacity: 1,
  },
  afterPostBg3: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    // borderRadius: 50,
    // opacity: 0.3,
    // backgroundColor:"rgba(255, 255, 255, 0.3)",    // overflow: "hidden"
  },
  afterPostOpacity: {
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  afterPostOpacity2: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  afterInnerContainer: {
    top: 100,
    position: 'relative',
    flex: 1,
    // borderRadius: 50,
    overflow: 'hidden',
  },
});

export default styles;
