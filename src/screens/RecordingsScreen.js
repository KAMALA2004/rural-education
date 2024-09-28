import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const recordingsByClass = {
  '1st Grade': [
    { id: '1', title: 'Math Lesson 1 Recording', date: '2024-09-10' },
    { id: '2', title: 'Science Introduction Recording', date: '2024-09-15' },
  ],
  '2nd Grade': [
    { id: '1', title: 'English Reading Recording', date: '2024-09-12' },
    { id: '2', title: 'History Overview Recording', date: '2024-09-18' },
  ],
  '3rd Grade': [
    { id: '1', title: 'Math Basics Recording', date: '2024-09-10' },
    { id: '2', title: 'Introduction to Science Recording', date: '2024-09-15' },
  ],
  '4th Grade': [
    { id: '1', title: 'Advanced Math Recording', date: '2024-09-12' },
    { id: '2', title: 'Science Experiments Recording', date: '2024-09-18' },
  ],
  '5th Grade': [
    { id: '1', title: 'Geometry Basics Recording', date: '2024-09-10' },
    { id: '2', title: 'History of Ancient Civilizations Recording', date: '2024-09-15' },
  ],
  '6th Grade': [
    { id: '1', title: 'Pre-Algebra Recording', date: '2024-09-12' },
    { id: '2', title: 'Physical Science Recording', date: '2024-09-18' },
  ],
  '7th Grade': [
    { id: '1', title: 'Algebra I Recording', date: '2024-09-10' },
    { id: '2', title: 'Life Science Recording', date: '2024-09-15' },
  ],
  '8th Grade': [
    { id: '1', title: 'Algebra II Recording', date: '2024-09-12' },
    { id: '2', title: 'Earth Science Recording', date: '2024-09-18' },
  ],
  '9th Grade': [
    { id: '1', title: 'Geometry Recording', date: '2024-09-10' },
    { id: '2', title: 'Biology Recording', date: '2024-09-15' },
  ],
  '10th Grade': [
    { id: '1', title: 'Trigonometry Recording', date: '2024-09-12' },
    { id: '2', title: 'Chemistry Recording', date: '2024-09-18' },
  ],
  '11th Grade': [
    { id: '1', title: 'Pre-Calculus Recording', date: '2024-09-10' },
    { id: '2', title: 'Physics Recording', date: '2024-09-15' },
  ],
  '12th Grade': [
    { id: '1', title: 'Calculus Recording', date: '2024-09-12' },
    { id: '2', title: 'Advanced Chemistry Recording', date: '2024-09-18' },
  ],
  'Computer Science': [
    { id: '1', title: 'Intro to Algorithms Recording', date: '2024-09-10' },
    { id: '2', title: 'Data Structures Overview Recording', date: '2024-09-15' },
  ],
  'Engineering': [
    { id: '1', title: 'Thermodynamics Basics Recording', date: '2024-09-12' },
    { id: '2', title: 'Fluid Mechanics Recording', date: '2024-09-18' },
  ],
  'Business Administration': [
    { id: '1', title: 'Principles of Management Recording', date: '2024-09-10' },
    { id: '2', title: 'Marketing Strategies Recording', date: '2024-09-15' },
  ],
  'Mathematics': [
    { id: '1', title: 'Calculus I Recording', date: '2024-09-12' },
    { id: '2', title: 'Linear Algebra Recording', date: '2024-09-18' },
  ],
  'Physics': [
    { id: '1', title: 'Classical Mechanics Recording', date: '2024-09-10' },
    { id: '2', title: 'Electromagnetism Recording', date: '2024-09-15' },
  ],
  'Chemistry': [
    { id: '1', title: 'Organic Chemistry Basics Recording', date: '2024-09-12' },
    { id: '2', title: 'Inorganic Chemistry Recording', date: '2024-09-18' },
  ],
  'Biology': [
    { id: '1', title: 'Cell Biology Recording', date: '2024-09-10' },
    { id: '2', title: 'Genetics Overview Recording', date: '2024-09-15' },
  ],
  'Economics': [
    { id: '1', title: 'Microeconomics Recording', date: '2024-09-12' },
    { id: '2', title: 'Macroeconomics Recording', date: '2024-09-18' },
  ],
  'Psychology': [
    { id: '1', title: 'Introduction to Psychology Recording', date: '2024-09-10' },
    { id: '2', title: 'Cognitive Psychology Recording', date: '2024-09-15' },
  ],
  'Political Science': [
    { id: '1', title: 'Political Theory Recording', date: '2024-09-12' },
    { id: '2', title: 'Comparative Politics Recording', date: '2024-09-18' },
  ],
  'History': [
    { id: '1', title: 'Ancient Civilizations Recording', date: '2024-09-10' },
    { id: '2', title: 'Modern History Recording', date: '2024-09-15' },
  ],
  'Sociology': [
    { id: '1', title: 'Introduction to Sociology Recording', date: '2024-09-12' },
    { id: '2', title: 'Social Research Methods Recording', date: '2024-09-18' },
  ],
};

const RecordingsScreen = ({ route }) => {
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A' } = route.params || {};

  const recordings = userType === 'School' ? recordingsByClass[classSelected] || [] : recordingsByClass[department] || [];

  const handlePlay = (recording) => {
    Alert.alert('Playing Recording', `Now playing: ${recording.title}`);
    // Implement the logic to play the recording
  };

  const recordingsHeaderText = userType === 'School'
    ? `Recordings for Grade ${classSelected !== 'N/A' ? classSelected : 'Your Selection'}`
    : `Recordings for ${department !== 'N/A' ? department : 'Your Department'}`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>{recordingsHeaderText}</Text>
      {recordings.length > 0 ? (
        recordings.map((recording) => (
          <View key={recording.id} style={styles.recordingContainer}>
            <Text style={styles.recordingTitle}>{recording.title}</Text>
            <Text style={styles.recordingDate}>Date: {recording.date}</Text>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => handlePlay(recording)}
            >
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noRecordingsText}>No recordings available for this selection.</Text>
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
  recordingContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  recordingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recordingDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noRecordingsText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RecordingsScreen;
