import {StyleSheet, Dimensions} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const {width, height} = Dimensions.get('window');

// responsive

import {
  iPhoneInch47, // done
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
  ? {inch: 6.5, width, height} // base(else), iPhone 11 Pro Max
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

  //// FlyingBird

  //// AfterFlying

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
  },

  //// Calender

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
    // marginLeft: 4,
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

  dictItem: {
    width: '30%',
    margin: '1%',
  },
  dictItemName: {
    width: '100%',
  },
  dictItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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
          opacity: 0,
          height: 40,
          width: 40,
        },

        //// FlyingBird 4.7 inch

        flyingBird: {
          top: 430,
          left: 80,
          width: 180,
          height: 200,
          resizeMode: 'contain',
        },
        FBCage: {
          top: -10,
          width: 350,
          height: 500,
        },

        FBAfterButtonWrapper: {
          // bottom: 10,
          top: 350,
          width: '50%',
          alignItems: 'center',
        },

        // Profile 4.7 inch

        profileContainer: {
          marginBottom: 30,
        },

        //// calender 4.7 inch

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

        // Profile 4.7 inch

        avatar: {
          height: 250,
          width: 250,
          resizeMode: 'contain',
          marginBottom: 10,
        },

        // Log 4.7 inch

        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 40,
          marginRight: 20,
          width: 300,
          height: 400,
          // paddingLeft: 10,
        },

        // Dictionary 4.7inch

        dictItemsContainer: {
          top: 20,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // paddingBottom: 120,
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
          left: 150,
        },
        infoButton: {
          opacity: 0,
          height: 40,
          width: 40,
        },

        //// FlyingBird 5.5 inch

        flyingBird: {
          top: 400,
          left: 100,
          width: 220,
          height: 240,
          resizeMode: 'contain',
        },
        FBCage: {
          left: 10,
          // top: 20,
          bottom: 100,
          width: 400,
          height: 600,
        },

        FBAfterButtonWrapper: {
          // bottom: 10,
          top: 350,
          width: '50%',
          alignItems: 'center',
        },

        // Profile 5.5 inch

        profileContainer: {
          marginBottom: 30,
        },

        //// calender 5.5 inch

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

        // Profile 5.5 inch

        avatar: {
          height: 250,
          width: 250,
          resizeMode: 'contain',
          marginBottom: 10,
        },

        // Log 5.5 inch

        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 40,
          marginRight: 20,
          width: 300,
          height: 400,
          // paddingLeft: 10,
        },

        // Dictionary 5.5inch

        dictItemsContainer: {
          top: 20,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // paddingBottom: 120,
        },
      }
    : iphoneModel.inch === 5.8
    ? {
        // all 5.8inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 50,
          marginBottom: 50,
        },

        // Top 5.8inch

        topBird: {
          top: 150,
          left: 95,
          width: 180,
          height: 230,
        },
        topCage: {
          width: 400,
          height: 500,
          top: -200,
        },
        // infoButton
        infoImg: {
          width: 50,
          height: 50,
          left: 150,
        },
        infoButton: {
          backgroundColor: 'red',
          opacity: 0,
          height: 40,
          width: 40,
        },

        // FlyingBird 5.8 inch

        flyingBird: {
          top: 400,
          left: 100,
          width: 180,
          height: 300,
          resizeMode: 'contain',
        },
        FBCage: {
          bottom: 90,
          width: 380,
          height: 530,
        },
        FBMessageContainer: {
          marginTop: 40,
          alignItems: 'center',
        },
        FBAfterButtonWrapper: {
          bottom: 70,
          width: '50%',
          alignItems: 'center',
        },

        // LogView 5.8 inch

        topContent: {
          marginTop: 70,
        },

        // logContainer: {
        //   flexGrow: 1,
        //   backgroundColor: '#F6F3CF',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        // },

        // PeopleLog 5.8 inch

        allToku: {
          backgroundColor: 'white',
          width: 165,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 10,
          padding: 10,
          paddingBottom: 50,
          marginLeft: 5,
          textAlign: 'center',
          fontSize: 20,
        },
        ownToku: {
          backgroundColor: '#fddea5',
          width: 165,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 10,
          padding: 10,
          paddingBottom: 50,

          textAlign: 'center',
          fontSize: 20,
        },

        bottomTextA: {
          backgroundColor: 'white',
          width: 330,
          height: 20,
          marginLeft: 25,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },
        bottomTextB: {
          backgroundColor: '#fddea5',
          width: 330,
          height: 20,
          marginLeft: 25,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },

        // PeopleTable 5.8 inch

        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 25,
          marginRight: 20,
          width: 330,
          height: 490,
          paddingLeft: 10,
        },
        icon: {
          width: 40,
          height: 40,
          resizeMode: 'contain',
        },
        cellA: {
          right: 10,
        },
        cellB: {
          right: 50,
        },
        cellC: {
          left: 60,
        },

        // UserTokuTable 5.8 inch

        userTableContainer: {
          backgroundColor: '#fddea5',
          marginLeft: 25,
          marginRight: 20,
          width: 330,
          height: 490,
          paddingLeft: 10,
        },

        // Dictionary 5.8inch

        dict: {
          top: 50,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 120,
        },
      }
    : iphoneModel.inch === 6.1
    ? {
        // all 6.1inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 30,
          marginBottom: 30,
        },

        // Top 6.1inch

        topBird: {
          top: 170,
          left: 95,
          width: 200,
          height: 250,
        },
        topCage: {
          width: 400,
          height: 550,
          top: -260,
        },
        // infoButton
        infoImg: {
          width: 50,
          height: 50,
          left: 160,
        },
        infoButton: {
          backgroundColor: 'red',
          opacity: 0,
          height: 40,
          width: 40,
        },

        // Flying Bird 6.1 inch

        flyingBird: {
          top: 450,
          left: 100,
          width: 200,
          height: 250,
          resizeMode: 'contain',
        },
        FBCage: {
          width: 400,
          height: 550,
        },
        FBMessageContainer: {
          marginTop: 40,
          alignItems: 'center',
        },
        FBAfterButtonWrapper: {
          bottom: 200,
          width: '50%',
          alignItems: 'center',
        },

        // LogView 6.1 inch

        topContent: {
          marginTop: 70,
        },

        // logContainer: {
        //   flexGrow: 1,
        //   backgroundColor: '#F6F3CF',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        // },

        // PeopleLog 6.1 inch

        peopleTable: {
          backgroundColor: '#F6F3CF',
        },
        peopleContainer: {
          flex: 1,
          backgroundColor: '#F6F3CF',
        },
        allToku: {
          backgroundColor: 'white',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },
        ownToku: {
          backgroundColor: '#fddea5',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },

        tabView: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        bottomTextA: {
          backgroundColor: 'white',
          width: 350,
          height: 20,
          marginLeft: 20,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },
        bottomTextB: {
          backgroundColor: '#fddea5',
          width: 350,
          height: 20,
          marginLeft: 20,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },

        // PeopleTable 6.1 inch
        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 20,
          marginRight: 20,
          width: 350,
          height: 500,
          paddingLeft: 10,
        },
        icon: {
          width: 40,
          height: 40,
          resizeMode: 'contain',
        },
        cellA: {
          right: 10,
        },
        cellB: {
          right: 50,
        },
        cellC: {
          left: 50,
        },

        // UserTokuTable 6.1 inch
        userTableContainer: {
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: '#fddea5',
          paddingLeft: 10,
          width: 350,
          height: 500,
        },

        // Dictionary 6.1 inch

        dict: {
          top: 60,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 120,
        },
      }
    : iphoneModel.inch === 6.7
    ? {
        // all 6.7inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 30,
          marginBottom: 30,
        },

        // Top 6.7inch

        topBird: {
          top: 170,
          left: 95,
          width: 200,
          height: 250,
        },
        topCage: {
          width: 400,
          height: 550,
          top: -260,
        },
        // infoButton
        infoImg: {
          width: 60,
          height: 60,
          left: 170,
          bottom: 15,
        },
        infoButton: {
          backgroundColor: 'red',
          opacity: 0,
          height: 50,
          width: 50,
        },

        // Flying Bird 6.7 inch

        flyingBird: {
          top: 450,
          left: 100,
          width: 200,
          height: 250,
          resizeMode: 'contain',
        },
        FBCage: {
          width: 400,
          height: 550,
        },
        FBMessageContainer: {
          marginTop: 40,
          alignItems: 'center',
        },
        FBAfterButtonWrapper: {
          bottom: 200,
          width: '50%',
          alignItems: 'center',
        },

        // LogView 6.7 inch

        topContent: {
          marginTop: 70,
        },

        // logContainer: {
        //   flexGrow: 1,
        //   backgroundColor: '#F6F3CF',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        // },

        // PeopleLog 6.7 inch

        peopleTable: {
          backgroundColor: '#F6F3CF',
        },
        peopleContainer: {
          flex: 1,
          backgroundColor: '#F6F3CF',
        },
        allToku: {
          backgroundColor: 'white',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },
        ownToku: {
          backgroundColor: '#fddea5',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },

        tabView: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        bottomTextA: {
          backgroundColor: 'white',
          width: 350,
          height: 20,
          marginLeft: 39,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },
        bottomTextB: {
          backgroundColor: '#fddea5',
          width: 350,
          height: 20,
          marginLeft: 39,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },

        // PeopleTable 6.7 inch
        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 39,
          marginRight: 20,
          width: 350,
          height: 580,
          paddingLeft: 10,
        },
        icon: {
          width: 40,
          height: 40,
          resizeMode: 'contain',
        },
        cellA: {
          right: 10,
        },
        cellB: {
          right: 60,
        },
        cellC: {
          left: 60,
        },

        // UserTokuTable 6.7 inch
        userTableContainer: {
          backgroundColor: '#fddea5',
          marginLeft: 39,
          marginRight: 20,
          width: 350,
          height: 580,
          paddingLeft: 10,
        },

        // Dictionary 6.7 inch

        dict: {
          top: 60,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 120,
        },
      }
    : {
        // all 6.5inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 30,
          marginBottom: 30,
        },

        // Top 6.5inch

        topBird: {
          top: 170,
          left: 95,
          width: 200,
          height: 250,
        },
        topCage: {
          width: 400,
          height: 550,
          top: -260,
        },
        // infoButton
        infoImg: {
          width: 60,
          height: 60,
          left: 170,
          bottom: 10,
        },
        infoButton: {
          backgroundColor: 'red',
          opacity: 0,
          height: 50,
          width: 50,
        },

        // Flying Bird 6.5 inch

        flyingBird: {
          top: 450,
          left: 100,
          width: 200,
          height: 250,
          resizeMode: 'contain',
        },
        FBCage: {
          width: 400,
          height: 550,
        },
        FBMessageContainer: {
          marginTop: 40,
          alignItems: 'center',
        },
        FBAfterButtonWrapper: {
          bottom: 200,
          width: '50%',
          alignItems: 'center',
        },

        // LogView 6.5 inch

        topContent: {
          marginTop: 70,
        },

        // logContainer: {
        //   flexGrow: 1,
        //   backgroundColor: '#F6F3CF',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        // },

        // PeopleLog 6.5 inch

        peopleTable: {
          backgroundColor: '#F6F3CF',
        },
        peopleContainer: {
          flex: 1,
          backgroundColor: '#F6F3CF',
        },

        allToku: {
          backgroundColor: 'white',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },
        ownToku: {
          backgroundColor: '#fddea5',
          width: 175,
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
          top: 5,
          padding: 10,
          paddingBottom: 50,
          textAlign: 'center',
          fontSize: 20,
        },
        tabView: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        bottomTextA: {
          backgroundColor: 'white',
          width: 350,
          height: 20,
          marginLeft: 32,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },
        bottomTextB: {
          backgroundColor: '#fddea5',
          width: 350,
          height: 20,
          marginLeft: 32,
          borderRadius: 10,
          overflow: 'hidden',
          bottom: 10,
        },

        // PeopleTable 6.5 inch
        peopleTableContainer: {
          backgroundColor: '#fff',
          marginLeft: 32,
          marginRight: 20,
          width: 350,
          height: 550,
          paddingLeft: 10,
        },
        icon: {
          width: 40,
          height: 40,
          resizeMode: 'contain',
        },
        cellA: {
          right: 10,
        },
        cellB: {
          right: 60,
        },
        cellC: {
          left: 60,
        },

        // UserTokuTable 6.5 inch
        userTableContainer: {
          backgroundColor: '#fddea5',
          marginLeft: 32,
          marginRight: 20,
          width: 350,
          height: 550,
          paddingLeft: 10,
        },

        // Dictionary 6.5 inch

        dict: {
          top: 60,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 120,
        },
      }
);

export default styles;
