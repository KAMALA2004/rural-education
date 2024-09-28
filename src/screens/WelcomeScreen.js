import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const [showOptions, setShowOptions] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const messageTimer = setTimeout(() => {
      setMessage('Hello students! Welcome to EduBridge!');
    }, 1000);

    const userTypeTimer = setTimeout(() => {
      setMessage('Tell me about Yourself!!');
      setShowOptions(true);
    }, 4000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(userTypeTimer);
    };
  }, []);

  const handleSelection = (option) => {
    if (option === 'School') {
      navigation.navigate('SchoolSelection');
    } else if (option === 'College') {
      navigation.navigate('CollegeSelection');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/bunny.png')}
        style={[styles.bunny, { opacity: fadeAnim }]}
      />
      <Text style={styles.messageText}>{message}</Text>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelection('School')}>
            <Text style={styles.optionText}>I'm a School Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleSelection('College')}>
            <Text style={styles.optionText}>I'm a College Student</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDE7', // Cream background
    padding: 20,
  },
  bunny: {
    width: 150,
    height: 150,
    marginBottom: 20,
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#008080', // Teal color
    textAlign: 'center',
    marginHorizontal: 20,
  },
  optionsContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%', // Ensure buttons span the width of the container
  },
  optionButton: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#008080', // Teal color
    borderRadius: 10,
    elevation: 4, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  optionText: {
    color: '#FFFDE7', // Cream color text
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
