import React, { useState } from 'react';
import { View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'; // Make sure this path matches your actual setup

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const auth = getAuth(app);

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('Welcome', { userName: name });
      } catch (error) {
        console.log(error); // Log the error to the console for debugging
        Alert.alert('Sign Up Error', error.message);
      }
    } else {
      Alert.alert('Password Error', 'Passwords do not match.');
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
          <Text style={styles.header}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupText}>Already have an account? Login</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    bottom:10,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use RGBA to create a semi-transparent background
    borderRadius: 10,
    padding: 20,
    minHeight: 600, // Adjusted height to fit all fields
    justifyContent: 'center', // Center contents vertically
    alignItems: 'center',     // Center contents horizontally
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Make the logo rounded
    marginBottom: 20, // Space between logo and title
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
