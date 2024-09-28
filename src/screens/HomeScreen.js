import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as needed
import getTranslations from '../utils/translationUtils';

const HomeScreen = ({ route, navigation }) => {
  const { language } = useLanguage();
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A' } = route.params || {};
  const translations = getTranslations(language);

  console.log('HomeScreen params:', { userType, classSelected, department });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{translations.welcome}</Text>
      {userType === 'School' && <Text style={styles.subHeaderText}>{translations.grade.replace('{classSelected}', classSelected)}</Text>}
      {userType === 'College' && <Text style={styles.subHeaderText}>{translations.department.replace('{department}', department)}</Text>}

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('ViewQuiz', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/quiz.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.quiz}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('LiveClasses', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/live-classes.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.liveClasses}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Assignments', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/assignment.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.assignments}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Recordings', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/recordings.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.recordings}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('LearningMaterial', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/learning-material.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.learningMaterial}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Forum', { userType, classSelected, department })}
        >
          <Image source={require('../../assets/forum.png')} style={styles.image} />
          <Text style={styles.boxText}>{translations.forum}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '45%',
    margin: '2.5%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
