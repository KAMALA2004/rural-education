import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Linking, TextInput, Image } from 'react-native';

const learningMaterialsByClass = {
  '1st Grade': [
    { 
      id: '1', 
      title: 'Maths', 
      date: '2024-09-01',
      textbookLink: 'https://ncert.nic.in/textbook/pdf/aemh101.pdf',
      youtubeLink: 'https://www.youtube.com/watch?v=JXgduTLVjdg',
      resourcesLink: 'https://www.mathworksheets.com/1st-grade/MathWorksheetsGrade1_8_5.pdf'
    },
    { 
      id: '2', 
      title: 'Science', 
      date: '2024-09-05',
      textbookLink: 'https://drive.google.com/file/d/1v_uktcyYYKh4wRRXDHUDmZ3dahXXbumz/view',
      youtubeLink: 'http://youtube.com/science-visual-aids-video',
      resourcesLink: 'http://resources.com/science-visual-aids'
    },
  ],
  '2nd Grade': [
    { 
      id: '1', 
      title: 'English Grammar Textbook', 
      date: '2024-09-10',
      textbookLink: 'http://example.com/english-grammar-textbook',
      youtubeLink: 'http://youtube.com/english-grammar-textbook-video',
      resourcesLink: 'http://resources.com/english-grammar-textbook'
    },
    { 
      id: '2', 
      title: 'Grammar Lessons', 
      date: '2024-09-15',
      textbookLink: 'http://example.com/grammar-lessons',
      youtubeLink: 'http://youtube.com/grammar-lessons-video',
      resourcesLink: 'http://resources.com/grammar-lessons'
    },
    { 
      id: '3', 
      title: 'Reading Exercises for Kids', 
      date: '2024-09-20',
      textbookLink: 'http://example.com/reading-exercises-for-kids',
      youtubeLink: 'http://youtube.com/reading-exercises-for-kids-video',
      resourcesLink: 'http://resources.com/reading-exercises-for-kids'
    },
  ],
  '3rd Grade': [
    { 
      id: '1', 
      title: 'English Grammar Guide', 
      date: '2024-09-10',
      textbookLink: 'http://example.com/english-grammar-guide',
      youtubeLink: 'http://youtube.com/english-grammar-video',
      resourcesLink: 'http://resources.com/english-grammar-guide'
    },
    { 
      id: '2', 
      title: 'Mathematics Fundamentals', 
      date: '2024-09-12',
      textbookLink: 'http://example.com/mathematics-fundamentals',
      youtubeLink: 'http://youtube.com/mathematics-fundamentals-video',
      resourcesLink: 'http://resources.com/mathematics-fundamentals'
    }
],

'4th Grade': [
    { 
      id: '1', 
      title: 'History of Early Civilizations', 
      date: '2024-09-15',
      textbookLink: 'http://example.com/early-civilizations',
      youtubeLink: 'http://youtube.com/early-civilizations-video',
      resourcesLink: 'http://resources.com/early-civilizations'
    },
    { 
      id: '2', 
      title: 'Basic Science Experiments', 
      date: '2024-09-20',
      textbookLink: 'http://example.com/basic-science-experiments',
      youtubeLink: 'http://youtube.com/basic-science-experiments-video',
      resourcesLink: 'http://resources.com/basic-science-experiments'
    }
],

'5th Grade': [
    { 
      id: '1', 
      title: 'Advanced Math Techniques', 
      date: '2024-09-22',
      textbookLink: 'http://example.com/advanced-math-techniques',
      youtubeLink: 'http://youtube.com/advanced-math-techniques-video',
      resourcesLink: 'http://resources.com/advanced-math-techniques'
    },
    { 
      id: '2', 
      title: 'Geography - Continents and Oceans', 
      date: '2024-09-25',
      textbookLink: 'http://example.com/continents-and-oceans',
      youtubeLink: 'http://youtube.com/continents-and-oceans-video',
      resourcesLink: 'http://resources.com/continents-and-oceans'
    }
],

'6th Grade': [
    { 
      id: '1', 
      title: 'Introduction to Algebra', 
      date: '2024-09-30',
      textbookLink: 'http://example.com/introduction-to-algebra',
      youtubeLink: 'http://youtube.com/introduction-to-algebra-video',
      resourcesLink: 'http://resources.com/introduction-to-algebra'
    },
    { 
      id: '2', 
      title: 'Earth Science Basics', 
      date: '2024-10-03',
      textbookLink: 'http://example.com/earth-science-basics',
      youtubeLink: 'http://youtube.com/earth-science-basics-video',
      resourcesLink: 'http://resources.com/earth-science-basics'
    }
],

'7th Grade': [
    { 
      id: '1', 
      title: 'World History - Middle Ages', 
      date: '2024-10-08',
      textbookLink: 'http://example.com/middle-ages-history',
      youtubeLink: 'http://youtube.com/middle-ages-history-video',
      resourcesLink: 'http://resources.com/middle-ages-history'
    },
    { 
      id: '2', 
      title: 'Basic Chemistry Concepts', 
      date: '2024-10-12',
      textbookLink: 'http://example.com/basic-chemistry-concepts',
      youtubeLink: 'http://youtube.com/basic-chemistry-concepts-video',
      resourcesLink: 'http://resources.com/basic-chemistry-concepts'
    }
],

'8th Grade': [
    { 
      id: '1', 
      title: 'Introduction to Physics', 
      date: '2024-10-15',
      textbookLink: 'http://example.com/introduction-to-physics',
      youtubeLink: 'http://youtube.com/introduction-to-physics-video',
      resourcesLink: 'http://resources.com/introduction-to-physics'
    },
    { 
      id: '2', 
      title: 'Literature - Analyzing Poems', 
      date: '2024-10-18',
      textbookLink: 'http://example.com/analyzing-poems',
      youtubeLink: 'http://youtube.com/analyzing-poems-video',
      resourcesLink: 'http://resources.com/analyzing-poems'
    }
],

'9th Grade': [
    { 
      id: '1', 
      title: 'Biology - Cells and Genetics', 
      date: '2024-10-22',
      textbookLink: 'http://example.com/cells-and-genetics',
      youtubeLink: 'http://youtube.com/cells-and-genetics-video',
      resourcesLink: 'http://resources.com/cells-and-genetics'
    },
    { 
      id: '2', 
      title: 'Geometry Essentials', 
      date: '2024-10-25',
      textbookLink: 'http://example.com/geometry-essentials',
      youtubeLink: 'http://youtube.com/geometry-essentials-video',
      resourcesLink: 'http://resources.com/geometry-essentials'
    }
],

'10th Grade': [
    { 
      id: '1', 
      title: 'History - World Wars', 
      date: '2024-10-28',
      textbookLink: 'http://example.com/world-wars-history',
      youtubeLink: 'http://youtube.com/world-wars-history-video',
      resourcesLink: 'http://resources.com/world-wars-history'
    },
    { 
      id: '2', 
      title: 'Physics - Laws of Motion', 
      date: '2024-11-01',
      textbookLink: 'http://example.com/laws-of-motion',
      youtubeLink: 'http://youtube.com/laws-of-motion-video',
      resourcesLink: 'http://resources.com/laws-of-motion'
    }
],

'11th Grade': [
    { 
      id: '1', 
      title: 'Calculus - Differentiation', 
      date: '2024-11-05',
      textbookLink: 'http://example.com/calculus-differentiation',
      youtubeLink: 'http://youtube.com/calculus-differentiation-video',
      resourcesLink: 'http://resources.com/calculus-differentiation'
    },
    { 
      id: '2', 
      title: 'Chemistry - Organic Compounds', 
      date: '2024-11-10',
      textbookLink: 'http://example.com/organic-compounds-chemistry',
      youtubeLink: 'http://youtube.com/organic-compounds-video',
      resourcesLink: 'http://resources.com/organic-compounds'
    }
],

'12th Grade': [
    { 
      id: '1', 
      title: 'Physics - Electromagnetism', 
      date: '2024-11-15',
      textbookLink: 'http://example.com/electromagnetism',
      youtubeLink: 'http://youtube.com/electromagnetism-video',
      resourcesLink: 'http://resources.com/electromagnetism'
    },
    { 
      id: '2', 
      title: 'Literature - Shakespearean Plays', 
      date: '2024-11-20',
      textbookLink: 'http://example.com/shakespearean-plays',
      youtubeLink: 'http://youtube.com/shakespearean-plays-video',
      resourcesLink: 'http://resources.com/shakespearean-plays'
    }
],

  'Computer Science': [
    {
      id: '1',
      title: 'Data Structures and Algorithms',
      date: '2024-09-15',
      textbookLink: 'http://example.com/data-structures-algorithms',
      youtubeLink: 'http://youtube.com/data-structures-algorithms-video',
      resourcesLink: 'http://resources.com/data-structures-algorithms'
    },
    {
      id: '2',
      title: 'Operating Systems',
      date: '2024-09-20',
      textbookLink: 'http://example.com/operating-systems',
      youtubeLink: 'http://youtube.com/operating-systems-video',
      resourcesLink: 'http://resources.com/operating-systems'
    }
  ],
  'Engineering': [
    {
      id: '1',
      title: 'Thermodynamics',
      date: '2024-09-10',
      textbookLink: 'http://example.com/thermodynamics',
      youtubeLink: 'http://youtube.com/thermodynamics-video',
      resourcesLink: 'http://resources.com/thermodynamics'
    },
    {
      id: '2',
      title: 'Circuit Analysis',
      date: '2024-09-22',
      textbookLink: 'http://example.com/circuit-analysis',
      youtubeLink: 'http://youtube.com/circuit-analysis-video',
      resourcesLink: 'http://resources.com/circuit-analysis'
    }
  ],
  'Business Administration': [
    {
      id: '1',
      title: 'Principles of Management',
      date: '2024-09-05',
      textbookLink: 'http://example.com/principles-of-management',
      youtubeLink: 'http://youtube.com/principles-of-management-video',
      resourcesLink: 'http://resources.com/principles-of-management'
    },
    {
      id: '2',
      title: 'Financial Accounting',
      date: '2024-09-18',
      textbookLink: 'http://example.com/financial-accounting',
      youtubeLink: 'http://youtube.com/financial-accounting-video',
      resourcesLink: 'http://resources.com/financial-accounting'
    }
  ],
  'Mathematics': [
    {
      id: '1',
      title: 'Calculus I',
      date: '2024-09-12',
      textbookLink: 'http://example.com/calculus-I',
      youtubeLink: 'http://youtube.com/calculus-I-video',
      resourcesLink: 'http://resources.com/calculus-I'
    },
    {
      id: '2',
      title: 'Linear Algebra',
      date: '2024-09-20',
      textbookLink: 'http://example.com/linear-algebra',
      youtubeLink: 'http://youtube.com/linear-algebra-video',
      resourcesLink: 'http://resources.com/linear-algebra'
    }
  ],
  'Physics': [
    {
      id: '1',
      title: 'Quantum Mechanics',
      date: '2024-09-11',
      textbookLink: 'http://example.com/quantum-mechanics',
      youtubeLink: 'http://youtube.com/quantum-mechanics-video',
      resourcesLink: 'http://resources.com/quantum-mechanics'
    },
    {
      id: '2',
      title: 'Electromagnetism',
      date: '2024-09-19',
      textbookLink: 'http://example.com/electromagnetism',
      youtubeLink: 'http://youtube.com/electromagnetism-video',
      resourcesLink: 'http://resources.com/electromagnetism'
    }
  ],
  'Chemistry': [
    {
      id: '1',
      title: 'Organic Chemistry',
      date: '2024-09-07',
      textbookLink: 'http://example.com/organic-chemistry',
      youtubeLink: 'http://youtube.com/organic-chemistry-video',
      resourcesLink: 'http://resources.com/organic-chemistry'
    },
    {
      id: '2',
      title: 'Physical Chemistry',
      date: '2024-09-21',
      textbookLink: 'http://example.com/physical-chemistry',
      youtubeLink: 'http://youtube.com/physical-chemistry-video',
      resourcesLink: 'http://resources.com/physical-chemistry'
    }
  ],
  'Biology': [
    {
      id: '1',
      title: 'Cell Biology',
      date: '2024-09-09',
      textbookLink: 'http://example.com/cell-biology',
      youtubeLink: 'http://youtube.com/cell-biology-video',
      resourcesLink: 'http://resources.com/cell-biology'
    },
    {
      id: '2',
      title: 'Genetics',
      date: '2024-09-16',
      textbookLink: 'http://example.com/genetics',
      youtubeLink: 'http://youtube.com/genetics-video',
      resourcesLink: 'http://resources.com/genetics'
    }
  ],
  'Economics': [
    {
      id: '1',
      title: 'Microeconomics',
      date: '2024-09-08',
      textbookLink: 'http://example.com/microeconomics',
      youtubeLink: 'http://youtube.com/microeconomics-video',
      resourcesLink: 'http://resources.com/microeconomics'
    },
    {
      id: '2',
      title: 'Macroeconomics',
      date: '2024-09-23',
      textbookLink: 'http://example.com/macroeconomics',
      youtubeLink: 'http://youtube.com/macroeconomics-video',
      resourcesLink: 'http://resources.com/macroeconomics'
    }
  ],
  'Psychology': [
    {
      id: '1',
      title: 'Cognitive Psychology',
      date: '2024-09-13',
      textbookLink: 'http://example.com/cognitive-psychology',
      youtubeLink: 'http://youtube.com/cognitive-psychology-video',
      resourcesLink: 'http://resources.com/cognitive-psychology'
    },
    {
      id: '2',
      title: 'Developmental Psychology',
      date: '2024-09-17',
      textbookLink: 'http://example.com/developmental-psychology',
      youtubeLink: 'http://youtube.com/developmental-psychology-video',
      resourcesLink: 'http://resources.com/developmental-psychology'
    }
  ],
  'Political Science': [
    {
      id: '1',
      title: 'International Relations',
      date: '2024-09-14',
      textbookLink: 'http://example.com/international-relations',
      youtubeLink: 'http://youtube.com/international-relations-video',
      resourcesLink: 'http://resources.com/international-relations'
    },
    {
      id: '2',
      title: 'Political Theories',
      date: '2024-09-18',
      textbookLink: 'http://example.com/political-theories',
      youtubeLink: 'http://youtube.com/political-theories-video',
      resourcesLink: 'http://resources.com/political-theories'
    }
  ],
  'History': [
    {
      id: '1',
      title: 'World War II',
      date: '2024-09-06',
      textbookLink: 'http://example.com/world-war-II',
      youtubeLink: 'http://youtube.com/world-war-II-video',
      resourcesLink: 'http://resources.com/world-war-II'
    },
    {
      id: '2',
      title: 'Ancient Civilizations',
      date: '2024-09-12',
      textbookLink: 'http://example.com/ancient-civilizations',
      youtubeLink: 'http://youtube.com/ancient-civilizations-video',
      resourcesLink: 'http://resources.com/ancient-civilizations'
    }
  ],
  'Sociology': [
    {
      id: '1',
      title: 'Sociological Theories',
      date: '2024-09-05',
      textbookLink: 'http://example.com/sociological-theories',
      youtubeLink: 'http://youtube.com/sociological-theories-video',
      resourcesLink: 'http://resources.com/sociological-theories'
    },
    {
      id: '2',
      title: 'Social Movements',
      date: '2024-09-21',
      textbookLink: 'http://example.com/social-movements',
      youtubeLink: 'http://youtube.com/social-movements-video',
      resourcesLink: 'http://resources.com/social-movements'
    }
  ]
};

const LearningMaterialsScreen = ({ route }) => {
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A' } = route.params || {};

  const learningMaterials = userType === 'School' 
    ? learningMaterialsByClass[classSelected] || [] 
    : learningMaterialsByClass[department] || [];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter materials based on search query
  const filteredMaterials = learningMaterials.filter(material =>
    material.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle opening links
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Unable to open link');
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/search-icon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search materials..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      {filteredMaterials.length > 0 ? (
        filteredMaterials.map((material) => (
          <View key={material.id} style={styles.materialContainer}>
            <Text style={styles.materialTitle}>{material.title}</Text>
            <Text style={styles.materialDate}>Date: {material.date}</Text>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => openLink(material.textbookLink)}
            >
              <Text style={styles.linkButtonText}>Textbook Link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => openLink(material.youtubeLink)}
            >
              <Text style={styles.linkButtonText}>YouTube Link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => openLink(material.resourcesLink)}
            >
              <Text style={styles.linkButtonText}>Resources Link</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noMaterialsText}>No learning materials available for this selection.</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  materialContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  materialDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noMaterialsText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LearningMaterialsScreen;
