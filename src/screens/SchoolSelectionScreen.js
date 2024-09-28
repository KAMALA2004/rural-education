import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SchoolSelectionScreen({ navigation }) {
  const handleClassSelection = (classSelected) => {
    // Navigate to the HomeScreen with the selected grade
    navigation.navigate('Home', { userType: 'School', classSelected, department: 'N/A' });
  };

  const classes = [
    '1st Grade', '2nd Grade',
    '3rd Grade', '4th Grade',
    '5th Grade', '6th Grade',
    '7th Grade', '8th Grade',
    '9th Grade', '10th Grade',
    '11th Grade', '12th Grade'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Your Class</Text>
      <View style={styles.grid}>
        {classes.map((classOption) => (
          <TouchableOpacity
            key={classOption}
            style={styles.optionButton}
            onPress={() => handleClassSelection(classOption)}
          >
            <Text style={styles.optionText}>{classOption}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDE7', // Cream background
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#008080', // Teal color
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  optionButton: {
    width: '45%', // Adjust to fit two items per row with some spacing
    margin: '2.5%',
    padding: 15,
    backgroundColor: '#008080', // Teal color
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#FFFDE7', // Cream color text
    fontSize: 18,
  },
});
