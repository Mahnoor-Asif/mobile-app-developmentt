
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's find your doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'centre', 
    alignItems: 'right',       
    paddingHorizontal: 20, 
  },
  text: {
    fontSize: 24,                   
    fontWeight: 'bold',             
    color: '#333', 
    alignItems:'right' ,                
  },
});

export default Greet;


