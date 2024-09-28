import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClassDetailsScreen = ({ route }) => {
  const { liveClass } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.classTitle}>{liveClass?.title}</Text>
      <Text style={styles.classTime}>Time: {liveClass?.time}</Text>

      <View style={styles.meetContainer}>
        <Text style={styles.meetText}>Join the Google Meet</Text>
        <View style={styles.videoPlaceholder}></View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => alert('Microphone Clicked')}>
            <Icon name="mic" size={30} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => alert('Video Clicked')}>
            <Icon name="videocam" size={30} color="#333" />
          </TouchableOpacity>
        </View>
        <Button title="Join Meeting" onPress={() => alert('Joining the meeting...')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  classTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classTime: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  meetContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  meetText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default ClassDetailsScreen;
