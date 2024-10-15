import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greet from './components/Greet';
import FlatCards from './components/FlatCards';
import Textfields from './components/Textfields'; 

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Textfields />
      <Greet />  
      <FlatCards /> 
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  }
}); 
export default App;
