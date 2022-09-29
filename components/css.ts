import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// responsive

import {
  iPhoneInch47,
  iPhoneInch55,
  iPhoneInch58,
  iPhoneInch65,
  iPad129,
  iPad11,
  iPad97,
} from '../lib/iPhoneSize';

const iphoneModel = iPhoneInch47()
  ? {model: 'iPhone SE 3rd, other', inch: 4.7, width, height} // iPhone SE 3rd
  : iPhoneInch55()
  ? {inch: 5.5, width, height} // iPhone 8 Plus
  : iPhoneInch58()
  ? {inch: 5.8, width, height} // iPhone 11 Pro (only ios 15.4, 2022/09/29)
  : iPhoneInch65()
  ? {inch: 6.5, width, height} // base(else), iPhone 11 Pro Max
  : {inch: null, width: null, height: null};

console.log('iPhone model:', iphoneModel);

const styles = StyleSheet.create({
  // all

  container: {
    flexGrow: 1,
    backgroundColor: '#F6F3CF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    position: 'relative',
    flex: 1,
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

  // Top

  input: {
    width: '80%',
    margin: 10,
    marginBottom: 0,
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

  //// FlyingBird

  FBMessage: {
    fontSize: 18,
    marginTop: 5,
    lineHeight: 30,
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

  // Profile

  mainImage: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  mainText: {
    marginTop: 50,
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

  //// calender
  calender: {
    width: '65%',
    borderWidth: 0,
    borderColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calenderCell: {
    width: '20%',
    height: 46,
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  calenderCell0: {
    backgroundColor: 'blue',
    opacity: 0.03,
  },
  calenderCell1: {
    backgroundColor: 'orange',
    opacity: 0.2,
  },
  calenderCell2: {
    backgroundColor: 'orange',
    opacity: 0.3,
  },
  calenderCell3: {
    backgroundColor: 'orange',
    opacity: 0.4,
  },
  calenderCell4: {
    backgroundColor: 'orange',
    opacity: 0.5,
  },
  calenderCell5: {
    backgroundColor: 'orange',
    opacity: 0.6,
  },
  calenderText: {
    display: 'none',
  },

  // People

  peopleTable: {
    backgroundColor: '#F6F3CF',
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
        // all 4.7inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 40,
          marginBottom: 40,
        },

        // Top 4.7inch

        appTitle: {
          marginTop: 40,
          fontSize: 30,
          fontWeight: 'bold',
        },
        topBird: {
          top: 130,
          left: 85,
          width: 170,
          height: 190,
        },
        topCage: {
          width: 350,
          height: 400,
          top: -200,
        },

        // FlyingBird 4.7 inch

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
        FBMessageContainer: {
          marginTop: 40,
          alignItems: 'center',
        },
        FBAfterButtonWrapper: {
          bottom: 30,
          width: '50%',
          alignItems: 'center',
        },

        // LogView 4.7 inch

        topContent: {
          marginTop: 70,
        },

        logContainer: {
          flexGrow: 1,
          backgroundColor: '#F6F3CF',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        // Dictionary 4.7inch

        dict: {
          top: 50,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      }
    : iphoneModel.inch === 5.5
    ? {
        // all 5.5inch

        strongText: {
          fontWeight: 'bold',
          fontSize: 28,
          top: 50,
          marginBottom: 50,
        },

        // Top 5.5inch

        appTitle: {
          marginTop: 40,
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 'bold',
        },
        topBird: {
          top: 150,
          left: 95,
          width: 180,
          height: 230,
        },
        topCage: {
          width: 380,
          height: 400,
          top: -200,
        },

        // FlyingBird 5.5 inch

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

        // LogView 5.5 inch

        topContent: {
          marginTop: 70,
        },

        logContainer: {
          flexGrow: 1,
          backgroundColor: '#F6F3CF',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        // Dictionary 5.5inch

        dict: {
          top: 50,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
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

        appTitle: {
          marginTop: 40,
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 'bold',
        },
        topBird: {
          top: 150,
          left: 95,
          width: 180,
          height: 230,
        },
        topCage: {
          width: 380,
          height: 400,
          top: -200,
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

        logContainer: {
          flexGrow: 1,
          backgroundColor: '#F6F3CF',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        // Dictionary 5.8inch

        dict: {
          top: 50,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
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

        appTitle: {
          marginTop: 60,
          marginBottom: 10,
          fontSize: 30,
          fontWeight: 'bold',
        },
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

        logContainer: {
          flexGrow: 1,
          backgroundColor: '#F6F3CF',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },

        // Dictionary 6.5 inch

        dict: {
          top: 60,
          width: '95%',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      }
);

export default styles;
