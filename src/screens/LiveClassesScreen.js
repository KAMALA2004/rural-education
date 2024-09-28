import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import getTranslations from '../utils/translationUtils';
const liveClassesByClass = {
  '1st Grade': [
    { id: '1', title: 'Math - Basic Algebra', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Science - Introduction to Plants', time: '11:30 AM - 12:30 PM' },
  ],
  '2nd Grade': [
    { id: '1', title: 'English - Grammar Basics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'History - Ancient Civilizations', time: '11:30 AM - 12:30 PM' },
  ],
  '3rd Grade': [
    { id: '1', title: 'Math - Multiplication & Division', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Science - Water Cycle', time: '11:30 AM - 12:30 PM' },
  ],
  '4th Grade': [
    { id: '1', title: 'Math - Fractions', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Geography - World Maps', time: '11:30 AM - 12:30 PM' },
  ],
  '5th Grade': [
    { id: '1', title: 'Math - Decimals & Percentages', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Science - Solar System', time: '11:30 AM - 12:30 PM' },
  ],
  '6th Grade': [
    { id: '1', title: 'Math - Algebraic Expressions', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Science - Human Body Systems', time: '11:30 AM - 12:30 PM' },
  ],
  '7th Grade': [
    { id: '1', title: 'Math - Linear Equations', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'History - Medieval Period', time: '11:30 AM - 12:30 PM' },
  ],
  '8th Grade': [
    { id: '1', title: 'Math - Quadratic Equations', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Science - Chemical Reactions', time: '11:30 AM - 12:30 PM' },
  ],
  '9th Grade': [
    { id: '1', title: 'Math - Geometry', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Biology - Cell Structure', time: '11:30 AM - 12:30 PM' },
  ],
  '10th Grade': [
    { id: '1', title: 'Math - Trigonometry', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Physics - Laws of Motion', time: '11:30 AM - 12:30 PM' },
  ],
  '11th Grade': [
    { id: '1', title: 'Math - Calculus Basics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Economics - Microeconomics', time: '11:30 AM - 12:30 PM' },
  ],
  '12th Grade': [
    { id: '1', title: 'Math - Advanced Calculus', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Political Science - International Relations', time: '11:30 AM - 12:30 PM' },
  ],
  'Computer Science': [
    { id: '1', title: 'Introduction to Programming', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Data Structures & Algorithms', time: '11:30 AM - 12:30 PM' },
  ],
  'Engineering': [
    { id: '1', title: 'Mechanical Engineering - Basics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Electrical Engineering - Circuits', time: '11:30 AM - 12:30 PM' },
  ],
  'Business Administration': [
    { id: '1', title: 'Principles of Management', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Marketing Strategies', time: '11:30 AM - 12:30 PM' },
  ],
  'Mathematics': [
    { id: '1', title: 'Advanced Algebra', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Probability & Statistics', time: '11:30 AM - 12:30 PM' },
  ],
  'Physics': [
    { id: '1', title: 'Classical Mechanics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Quantum Physics', time: '11:30 AM - 12:30 PM' },
  ],
  'Chemistry': [
    { id: '1', title: 'Organic Chemistry', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Physical Chemistry', time: '11:30 AM - 12:30 PM' },
  ],
  'Biology': [
    { id: '1', title: 'Genetics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Ecology & Environment', time: '11:30 AM - 12:30 PM' },
  ],
  'Economics': [
    { id: '1', title: 'Microeconomics', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Macroeconomics', time: '11:30 AM - 12:30 PM' },
  ],
  'Psychology': [
    { id: '1', title: 'Introduction to Psychology', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Cognitive Psychology', time: '11:30 AM - 12:30 PM' },
  ],
  'Political Science': [
    { id: '1', title: 'International Relations', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Political Theories', time: '11:30 AM - 12:30 PM' },
  ],
  'History': [
    { id: '1', title: 'World War I & II', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Ancient Civilizations', time: '11:30 AM - 12:30 PM' },
  ],
  'Sociology': [
    { id: '1', title: 'Introduction to Sociology', time: '10:00 AM - 11:00 AM' },
    { id: '2', title: 'Cultural Anthropology', time: '11:30 AM - 12:30 PM' },
],

  
};

const LiveClassesScreen = ({ route, navigation }) => {
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A', language = 'en' } = route.params || {};

  // Get translations for the current language
  const translations = getTranslations(language);

  // Get the live classes based on the selected class or department
  const liveClasses = userType === 'School' ? liveClassesByClass[classSelected] || [] : liveClassesByClass[department] || [];

  // Function to handle joining a live class
  const handleJoin = (liveClass) => {
    navigation.navigate('ClassDetails', { liveClass });
  };

  // Determine the live class header text
  const liveClassHeaderText = userType === 'School'
    ? translations['liveClasses'] + ` for Grade ${classSelected !== 'N/A' ? classSelected : 'Your Selection'}`
    : translations['liveClasses'] + ` for ${department !== 'N/A' ? department : 'Your Department'}`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>{liveClassHeaderText}</Text>
      {liveClasses.length > 0 ? (
        liveClasses.map((liveClass) => (
          <View key={liveClass.id} style={styles.classContainer}>
            <Text style={styles.classTitle}>{liveClass.title}</Text>
            <Text style={styles.classTime}>{translations['time']}: {liveClass.time}</Text>
            <TouchableOpacity
              style={styles.joinButton}
              onPress={() => handleJoin(liveClass)}
            >
              <Text style={styles.joinButtonText}>{translations['join']}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noClassesText}>{translations['noClassesAvailable']}</Text>
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
  classContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  classTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  classTime: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  joinButton: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noClassesText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LiveClassesScreen;