
import React from 'react';
import { View, Text, StyleSheet,text } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const FlatCards = () => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View style={styles.card}>
          < FontAwesome6 name="user-doctor" size={30} color="#000" />
          <Text style={styles.text}>DR JHON SMITH</Text>
          <Text style={styles.profession}>Psychologist</Text>
           <View style={styles.ratingContainer}>
          <Icon name="star" size={10} color="gold" style={styles.icon} />
          <Text style={styles.rating}>4.3</Text>
           </View>
        </View>



        <View style={styles.card}>
          < FontAwesome6 name="user-doctor"  size={30} color="#000" />
          <Text style={styles.text}>DR Anna Din</Text>
          <Text style={styles.profession}>Dermatologist</Text>
         <View style={styles.ratingContainer}>
          <Icon name="star" size={10} color="gold" style={styles.icon} />
          <Text style={styles.rating}>4.7</Text>
           </View>
        </View>
        </View>


      <View style={styles.row}>
        <View style={styles.card}>
          <FontAwesome6 name="user-doctor"  size={30} color="#000" />
          <Text style={styles.text}>DR Angela Riaz</Text>
          <Text style={styles.profession}>Therapist</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={10} color="gold" style={styles.icon} />
          <Text style={styles.rating}>4.0</Text>
           </View>
        </View>


        <View style={styles.card}>
          <FontAwesome6 name="user-doctor"  size={30} color="#000" />
          <Text style={styles.text}>Dr Chris Bronte</Text>
          <Text style={styles.profession}>Dentist</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={10} color="gold" style={styles.icon} />
          <Text style={styles.rating}>4.8</Text>
           </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E6E6FA',
  },
  row: {
    flexDirection: 'row',         
    justifyContent: 'space-between',  
    marginBottom: 10,
  },
  card: {
    flex: 1,                      
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 150,
    marginHorizontal: 5,          
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  rating: {
    fontStyle: 'italic',
    fontSize: 12,
    borderRadius: 10, 
    paddingHorizontal: 4,
    paddingVertical: 2,
    color: 'white',
    borderCurve:'2',
   
  },
  profession: {
    fontSize: 12,
    color: '#777',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5, 
  },
  ratingContainer:{
  flexDirection: 'row',
  marginRight: 5,
  backgroundColor: 'purple',
  alignItems: 'center',
   borderRadius: 4,
    


  }
});

export default FlatCards;