import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CollegeSelectionScreen({ navigation }) {
  const handleDepartmentSelection = (department) => {
    // Save department selection and navigate to home screen
    navigation.navigate('Home', { userType: 'College', department });
  };

  const departments = [
    'Computer Science', 'Engineering',
    'Business Administration', 'Mathematics',
    'Physics', 'Chemistry',
    'Biology', 'Economics',
    'Psychology', 'Political Science',
    'History', 'Sociology'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Your Department</Text>
      <View style={styles.grid}>
        {departments.map((department) => (
          <TouchableOpacity
            key={department}
            style={styles.optionButton}
            onPress={() => handleDepartmentSelection(department)}
          >
            <Text style={styles.optionText}>{department}</Text>
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
    backgroundColor: '#FFFDE7',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#008080',
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
    backgroundColor: '#008080',
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
});
