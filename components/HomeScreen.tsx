import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import react from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {auth, firestore} from '../firebase';
import styles from './css';

type RootStackParamList = {
  Login: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((e) => alert(e.message));
  };
  return (
    <View style={styles.loginContainer}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button2}>
        <Text style={styles.button1Text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
