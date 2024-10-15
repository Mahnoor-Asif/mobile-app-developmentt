import {React} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
function textfield(){
return(

<View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search conditions and doctors"
        placeholderTextColor="#888" // Optional: Set the placeholder text color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    height: 40, // Set height for single line
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});






export default textfield