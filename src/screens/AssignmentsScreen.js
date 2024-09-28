import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const assignmentsByClass = {
  '1st Grade': [
    { id: '1', title: 'Math Assignment 1', dueDate: '2024-09-10' },
    { id: '2', title: 'Science Project', dueDate: '2024-09-15' },
  ],
  '2nd Grade': [
    { id: '1', title: 'English Essay', dueDate: '2024-09-12' },
    { id: '2', title: 'History Assignment', dueDate: '2024-09-18' },
  ],
  '3rd Grade': [
    { id: '1', title: 'Math Quiz', dueDate: '2024-09-14' },
    { id: '2', title: 'Science Experiment', dueDate: '2024-09-19' },
  ],
  '4th Grade': [
    { id: '1', title: 'Reading Assignment', dueDate: '2024-09-13' },
    { id: '2', title: 'Geography Map Project', dueDate: '2024-09-20' },
  ],
  '5th Grade': [
    { id: '1', title: 'Math Fractions Worksheet', dueDate: '2024-09-16' },
    { id: '2', title: 'Social Studies Essay', dueDate: '2024-09-21' },
  ],
  '6th Grade': [
    { id: '1', title: 'Algebra Practice', dueDate: '2024-09-17' },
    { id: '2', title: 'Science Fair Project', dueDate: '2024-09-22' },
  ],
  '7th Grade': [
    { id: '1', title: 'Literature Review', dueDate: '2024-09-18' },
    { id: '2', title: 'World History Assignment', dueDate: '2024-09-23' },
  ],
  '8th Grade': [
    { id: '1', title: 'Geometry Homework', dueDate: '2024-09-19' },
    { id: '2', title: 'Chemistry Lab Report', dueDate: '2024-09-24' },
  ],
  '9th Grade': [
    { id: '1', title: 'Trigonometry Quiz', dueDate: '2024-09-20' },
    { id: '2', title: 'Biology Presentation', dueDate: '2024-09-25' },
  ],
  '10th Grade': [
    { id: '1', title: 'Physics Assignment', dueDate: '2024-09-21' },
    { id: '2', title: 'Civics Project', dueDate: '2024-09-26' },
  ],
  '11th Grade': [
    { id: '1', title: 'Calculus Homework', dueDate: '2024-09-22' },
    { id: '2', title: 'Economics Research Paper', dueDate: '2024-09-27' },
  ],
  '12th Grade': [
    { id: '1', title: 'Statistics Worksheet', dueDate: '2024-09-23' },
    { id: '2', title: 'Political Science Essay', dueDate: '2024-09-28' },
  ],
  'Computer Science': [
    { id: '1', title: 'Introduction to Programming', dueDate: '2024-09-24' },
    { id: '2', title: 'Data Structures Project', dueDate: '2024-09-29' },
  ],
  'Engineering': [
    { id: '1', title: 'Basic Mechanics Assignment', dueDate: '2024-09-25' },
    { id: '2', title: 'Introduction to Robotics', dueDate: '2024-09-30' },
  ],
  'Business Administration': [
    { id: '1', title: 'Marketing Plan Assignment', dueDate: '2024-09-26' },
    { id: '2', title: 'Financial Analysis Report', dueDate: '2024-10-01' },
  ],
  'Mathematics': [
    { id: '1', title: 'Calculus Assignment', dueDate: '2024-09-27' },
    { id: '2', title: 'Linear Algebra Worksheet', dueDate: '2024-10-02' },
  ],
  'Physics': [
    { id: '1', title: 'Kinematics Project', dueDate: '2024-09-28' },
    { id: '2', title: 'Thermodynamics Assignment', dueDate: '2024-10-03' },
  ],
  'Chemistry': [
    { id: '1', title: 'Periodic Table Assignment', dueDate: '2024-09-29' },
    { id: '2', title: 'Chemical Reactions Project', dueDate: '2024-10-04' },
  ],
  'Biology': [
    { id: '1', title: 'Genetics Assignment', dueDate: '2024-09-30' },
    { id: '2', title: 'Evolution Research Paper', dueDate: '2024-10-05' },
  ],
  'Economics': [
    { id: '1', title: 'Supply and Demand Analysis', dueDate: '2024-10-01' },
    { id: '2', title: 'Macro-Economics Essay', dueDate: '2024-10-06' },
  ],
  'Psychology': [
    { id: '1', title: 'Introduction to Psychology', dueDate: '2024-10-02' },
    { id: '2', title: 'Behavioral Studies Project', dueDate: '2024-10-07' },
  ],
  'Political Science': [
    { id: '1', title: 'Government Systems Essay', dueDate: '2024-10-03' },
    { id: '2', title: 'International Relations Assignment', dueDate: '2024-10-08' },
  ],
  'History': [
    { id: '1', title: 'World War II Research', dueDate: '2024-10-04' },
    { id: '2', title: 'Ancient Civilizations Paper', dueDate: '2024-10-09' },
  ],
  'Sociology': [
    { id: '1', title: 'Social Behavior Research', dueDate: '2024-10-05' },
    { id: '2', title: 'Cultural Analysis Assignment', dueDate: '2024-10-10' },
],
};

const AssignmentsScreen = ({ route }) => {
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A' } = route.params || {};

  // Get the assignments based on the selected class or department
  const assignments = userType === 'School' ? assignmentsByClass[classSelected] || [] : assignmentsByClass[department] || [];

  // Function to handle assignment submission
  const handleSubmit = (assignment) => {
    Alert.alert('Assignment Submitted', `You have submitted: ${assignment.title}`);
    // Here you can handle the submission, e.g., send the assignment submission to a server
  };

  // Determine the assignment header text
  const assignmentHeaderText = userType === 'School'
    ? `Assignments for Grade ${classSelected !== 'N/A' ? classSelected : 'Your Selection'}`
    : `Assignments for ${department !== 'N/A' ? department : 'Your Department'}`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>{assignmentHeaderText}</Text>
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <View key={assignment.id} style={styles.assignmentContainer}>
            <Text style={styles.assignmentTitle}>{assignment.title}</Text>
            <Text style={styles.dueDate}>Due Date: {assignment.dueDate}</Text>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSubmit(assignment)}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noAssignmentsText}>No assignments available for this selection.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  assignmentContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  assignmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dueDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noAssignmentsText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AssignmentsScreen;
