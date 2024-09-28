import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  // Extract userName from route parameters
  const { userName } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.userName}>Welcome, {userName}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    marginTop: 20,
  },
});
