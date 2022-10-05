import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import {
  iPhoneInch47,
  iPhoneInch55,
  iPhoneInch58,
  iPhoneInch61,
  iPhoneInch65,
  iPhoneInch67,
} from '../lib/iPhoneSize';

const iphoneModel = iPhoneInch47()
  ? {model: 'iPhone SE 3rd, other', inch: 4.7, width, height} // iPhone SE 3rd
  : iPhoneInch55()
  ? {inch: 5.5, width, height} // iPhone 8 Plus
  : iPhoneInch58()
  ? {inch: 5.8, width, height} // iPhone 11 Pro (only ios 15.4, 2022/09/29)
  : iPhoneInch61()
  ? {inch: 6.1, width, height} // iPhone12, 12Pro, 13, 13Pro
  : iPhoneInch65()
  ? {inch: 6.5, width, height} // iPhone 11 Pro Max
  : iPhoneInch67()
  ? {inch: 6.7, width, height} // iPhone12 Pro Max, 13 Pro Max, 14 Pro Max
  : {inch: null, width: null, height: null};

console.log('iPhone model:', iphoneModel);

const styles = StyleSheet.create({
  // all

  container: {
    backgroundColor: '#F6F3CF',
    flexGrow: 1,
  },

  inner: {
    top: 30,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  h2: {
    fontSize: 25,
    lineHeight: 37,
    marginBottom: 10,
  },

  p: {
    fontSize: 18,
    lineHeight: 30,
  },

  strong: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  // ↓ あんまり整理できてない

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
  button2: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    fontSize: 18,
    color: 'white',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },

  // ↑ あんまり整理できてない

  // Top

  input: {
    width: '70%',
    margin: 10,
    marginBottom: 0,
  },
  suggestContainer: {
    alignItems: 'flex-start',
    width: '70%',
    backgroundColor: 'white',
    marginTop: 0,
    padding: 10,
  },
  suggestText: {
    fontSize: 18,
    marginTop: 5,
  },
  birdInCageContainer: {
    position: 'relative',
    flex: 1,
  },
  infoImg: {
    left: 150,
  },
  infoButton: {
    opacity: 0,
    backgroundColor: 'red',
  },

  //// FlyingBird

  flyingBird: {
    resizeMode: 'contain',
  },

  //// AfterFlying

  FBAfterButtonWrapper: {
    top: 350,
    width: '50%',
    alignItems: 'center',
  },
  FBMessageInner: {
    alignItems: 'center',
  },
  FBMessageSP: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
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
  avatar: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  avatarContainer: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'red',
  },
  afterPostCount: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  // Profile

  profileContainer: {
    flexGrow: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },

  //// Calender

  calender: {
    width: '85%',
    borderWidth: 0,
    borderColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calenderCell: {
    width: '20%',
    height: 60,
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  calenderCell0: {
    backgroundColor: 'rgba(0,0,255,0.05)',
  },
  calenderCell1: {
    backgroundColor: 'rgba(252,174,30,0.2)',
  },
  calenderCell2: {
    backgroundColor: 'rgba(252,174,30,0.3)',
  },
  calenderCell3: {
    backgroundColor: 'rgba(252,174,30,0.4)',
  },
  calenderCell4: {
    backgroundColor: 'rgba(252,174,30,0.5)',
  },
  calenderCell5: {
    backgroundColor: 'rgba(252,174,30,0.6)',
  },

  ////// modal
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
  modalButton: {
    borderRadius: 13,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: 'orange',
    opacity: 0.8,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextBold: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Log

  logTable: {
    marginLeft: 25,
    marginRight: 20,
    width: 300,
    height: 400,
  },
  userTokuTable: {
    backgroundColor: '#fddea5',
  },
  peopleTokuTable: {
    backgroundColor: '#fff',
  },
  tabView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  peopleTokuButton: {
    marginLeft: 25,
    backgroundColor: 'white',
    width: 150,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    top: 5,
    padding: 10,
    paddingBottom: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  ownTokuButton: {
    marginRight: 20,
    backgroundColor: '#fddea5',
    width: 150,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    top: 5,
    padding: 10,
    paddingBottom: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  logIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cellA: {
    flex: 1,
  },
  cellB: {
    paddingLeft: 10,
    flex: 4,
  },
  cellC: {
    flex: 1,
  },
  userBottomRadius: {
    backgroundColor: 'white',
    width: 300,
    height: 20,
    marginLeft: 25,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    bottom: 10,
  },
  peopleBottomRadius: {
    backgroundColor: '#fddea5',
    width: 300,
    height: 20,
    marginLeft: 25,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    bottom: 10,
  },

  // Dictionary

  dictItemsContainer: {
    top: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dictItem: {
    width: '30%',
    margin: '1%',
  },
  dictItemName: {
    width: '100%',
  },

  // login

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
});

export const customStyles = StyleSheet.create(
  iphoneModel.inch === 4.7
    ? {
        // Top 4.7inch

        topBird: {
          top: 140,
          left: 80,
          width: 150,
          height: 170,
        },
        topCage: {
          width: 320,
          height: 380,
          top: -180,
        },

        //// infoButton  4.7inch

        infoImg: {
          top: 330,
          width: 50,
          height: 50,
          left: 150,
        },
        infoButton: {
          height: 40,
          width: 40,
        },

        //// FlyingBird 4.7 inch

        flyingBird: {
          top: 430,
          left: 80,
          width: 180,
          height: 200,
        },
        FBCage: {
          top: -10,
          width: 350,
          height: 500,
        },

        //// Calender

        // Dictionary 4.7 inch
        dictItemImage: {
          width: 63,
          height: 63,
          left: 20,
          resizeMode: 'contain',
        },
      }
    : iphoneModel.inch === 5.5
    ? {
        // Top 5.5inch

        topBird: {
          top: 160,
          left: 100,
          width: 180,
          height: 210,
        },
        topCage: {
          width: 380,
          height: 450,
          top: -210,
        },

        //// infoButton  5.5inch

        infoImg: {
          top: 390,
          width: 50,
          height: 50,
        },
        infoButton: {
          height: 40,
          width: 40,
        },

        //// FlyingBird 5.5 inch

        flyingBird: {
          top: 400,
          left: 100,
          width: 220,
          height: 240,
        },
        FBCage: {
          left: 10,
          bottom: 100,
          width: 400,
          height: 600,
        },

        // Log 5.5 inch

        logTable: {
          marginLeft: 25,
          marginRight: 20,
          width: 300,
          height: 470,
        },

        // Dictionary
        dictItemImage: {
          width: 90,
          height: 90,
          left: 20,
          resizeMode: 'contain',
        },
      }
    : iphoneModel.inch === 5.8
    ? {
        // Top 5.8inch

        topBird: {
          top: 160,
          left: 95,
          width: 180,
          height: 210,
        },
        topCage: {
          width: 380,
          height: 450,
          top: -210,
        },

        //// infoButton  5.8inch

        infoImg: {
          top: 420,
          width: 50,
          height: 50,
        },
        infoButton: {
          height: 40,
          width: 40,
        },

        //// FlyingBird 5.8 inch

        flyingBird: {
          top: 400,
          left: 100,
          width: 220,
          height: 240,
        },
        FBCage: {
          left: 10,
          bottom: 100,
          width: 400,
          height: 600,
        },

        // Log 5.8 inch

        logTable: {
          marginLeft: 25,
          marginRight: 20,
          width: 300,
          height: 500,
        },

        // Dictionary
        dictItemImage: {
          width: 90,
          height: 90,
          left: 10,
          resizeMode: 'contain',
        },
      }
    : iphoneModel.inch === 6.1
    ? {
        // all 6.1 inch

        h1: {
          fontSize: 30,
          marginBottom: 15,
        },

        h2: {
          fontSize: 27,
          lineHeight: 40,
          marginBottom: 10,
        },

        p: {
          fontSize: 20,
          lineHeight: 32,
        },

        strong: {
          fontSize: 20,
          lineHeight: 32,
          fontWeight: 'bold',
        },

        // Top 6.1inch

        topBird: {
          top: 140,
          left: 95,
          width: 200,
          height: 230,
        },
        topCage: {
          width: 400,
          height: 470,
          top: -240,
        },

        //// infoButton  6.1inch

        infoImg: {
          top: 440,
          width: 50,
          height: 50,
        },
        infoButton: {
          height: 40,
          width: 40,
        },

        //// FlyingBird 6.1 inch

        flyingBird: {
          top: 400,
          left: 100,
          width: 220,
          height: 240,
        },
        FBCage: {
          left: 10,
          bottom: 100,
          width: 400,
          height: 600,
        },

        logTable: {
          marginLeft: 25,
          marginRight: 20,
          width: 300,
          height: 500,
        },

        // Dictionary
        dictItemImage: {
          width: 95,
          height: 95,
          left: 10,
          resizeMode: 'contain',
        },
      }
    : iphoneModel.inch === 6.5
    ? {
        // all 6.5 inch

        inner: {
          top: 40,
          bottom: 40,
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        h1: {
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 15,
        },

        h2: {
          fontSize: 29,
          lineHeight: 46,
          marginBottom: 10,
        },

        p: {
          fontSize: 22,
          lineHeight: 35,
        },

        strong: {
          fontSize: 22,
          lineHeight: 35,
          fontWeight: 'bold',
        },

        // Top 6.5inch

        topBird: {
          top: 140,
          left: 95,
          width: 220,
          height: 250,
        },
        topCage: {
          width: 420,
          height: 490,
          top: -260,
        },

        //// infoButton  6.5inch

        infoImg: {
          top: 460,
          width: 60,
          height: 60,
        },
        infoButton: {
          height: 70,
          width: 70,
        },

        //// FlyingBird 6.5 inch

        flyingBird: {
          top: 500,
          left: 100,
          width: 220,
          height: 240,
        },
        FBCage: {
          left: 10,
          // top: 20,
          bottom: 10,
          width: 400,
          height: 600,
        },

        logTable: {
          marginLeft: 25,
          marginRight: 20,
          width: 350,
          height: 550,
        },

        peopleTokuButton: {
          width: 175,
        },
        ownTokuButton: {
          width: 175,
        },
        userBottomRadius: {
          width: 350,
        },
        peopleBottomRadius: {
          width: 350,
        },

        // Dictionary
        dictItemImage: {
          width: 105,
          height: 105,
          left: 10,
          resizeMode: 'contain',
        },
      }
    : {
        // all 6.7 inch

        inner: {
          top: 40,
          bottom: 40,
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        h1: {
          fontSize: 34,
          fontWeight: 'bold',
          marginBottom: 15,
        },

        h2: {
          fontSize: 31,
          lineHeight: 48,
          marginBottom: 10,
        },

        p: {
          fontSize: 24,
          lineHeight: 36,
        },

        strong: {
          fontSize: 24,
          lineHeight: 36,
          fontWeight: 'bold',
        },

        // Top 6.7inch

        topBird: {
          top: 160,
          left: 95,
          width: 220,
          height: 250,
        },
        topCage: {
          width: 420,
          height: 490,
          top: -240,
        },

        //// infoButton  6.7inch

        infoImg: {
          top: 490,
          width: 60,
          height: 60,
        },
        infoButton: {
          height: 70,
          width: 70,
        },

        //// FlyingBird 6.7 inch

        flyingBird: {
          top: 500,
          left: 100,
          width: 220,
          height: 240,
        },
        FBCage: {
          left: 10,
          bottom: 10,
          width: 400,
          height: 600,
        },

        calender: {
          width: '90%',
        },

        logTable: {
          marginLeft: 25,
          marginRight: 20,
          width: 350,
          height: 550,
        },

        peopleTokuButton: {
          width: 175,
        },
        ownTokuButton: {
          width: 175,
        },
        userBottomRadius: {
          width: 350,
        },
        peopleBottomRadius: {
          width: 350,
        },

        // Dictionary
        dictItemImage: {
          width: 105,
          height: 105,
          left: 10,
          resizeMode: 'contain',
        },
      }
);

export default styles;
