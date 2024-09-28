import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function LogoScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to LoginScreen
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EduBridge</Text>
      <Text style={styles.text}>Let's start Learning!</Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
