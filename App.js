import React, { useState } from "react";
import { View, Text,TextInput, TouchableOpacity, StyleSheet } from "react-native";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState("0"); // State to hold the display value

  const handleButtonPress = (input) => {
    if (input === "C") {
      setDisplayValue("0"); // Reset display to 0
    } else if (input === "=") {
      try {
        setDisplayValue(eval(displayValue).toString()); // Evaluate expression
      } catch (error) {
        setDisplayValue("Error"); // Handle invalid expressions
      }
    } else {
  // input to display, replace "0" with new input
      setDisplayValue(displayValue === "0" ? input : displayValue + input);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text> {/* Display area */}
      <View style={styles.buttonsContainer}>
        {["C", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((label) => (
          <TouchableOpacity key={label} style={styles.button} onPress={() => handleButtonPress(label)}>
            <Text style={styles.buttonText}>{label}</Text> {/* Button label */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Styles for designing calculator buttons
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  display: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "right",
    width: "80%",
    padding: 10,
    backgroundColor: "#ddd",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#888",
    padding: 15,
    margin: 5,
    borderRadius: 5,
    minWidth: 60,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default CalculatorApp;
