import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Search conditions and doctors"
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 11,
    width: '90%',
    backgroundColor:'white',
    
  },
  textInput: {
    flex: 1,
    padding: 10,
    
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
