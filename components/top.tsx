import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 100,
  },
});
const top = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Birdonation</Text>
      <TextInput mode="outlined" label="input" style={styles.input}></TextInput>
      <Button mode="contained" colors="onPrimary" icon="notebook">
        記録する
      </Button>
    </View>
  );
};
export default top;
