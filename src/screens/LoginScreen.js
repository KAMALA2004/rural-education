import React, { useState } from 'react';
import { View, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase'; // Ensure the path is correct
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigation.navigate('Welcome');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background-image.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.formContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.header}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use RGBA to create a semi-transparent background
    borderRadius: 10,
    padding: 20,
    minHeight: 500, // Increased height
    justifyContent: 'center', // Center contents vertically
    alignItems: 'center',     // Center contents horizontally
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#693F21', // Customize your title color
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%', // Ensure inputs fill the container width
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Make the logo rounded
    marginBottom: 20, // Space between logo and title
  },
  button: {
    backgroundColor: '#FFA500', // Customize your button color
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%', // Ensure button fills the container width
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    color: '#FFA500',
    marginTop: 20,
    fontSize: 16,
  },
});
