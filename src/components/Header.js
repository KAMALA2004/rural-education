import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this package installed
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as needed

const Header = ({ navigation, title, userName }) => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    switch (language) {
      case 'en':
        changeLanguage('hi');
        break;
      case 'hi':
        changeLanguage('te');
        break;
      case 'te':
        changeLanguage('ta');
        break;
      case 'ta':
        changeLanguage('en');
        break;
      default:
        changeLanguage('en');
        break;
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconButton}>
          <Icon name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Profile', { userName })} style={styles.iconButton}>
          <Icon name="account-circle" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLanguageChange} style={styles.iconButton}>
          <Icon name="language" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 110,
    backgroundColor: '#008080',
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'flex-end',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

export default Header;
