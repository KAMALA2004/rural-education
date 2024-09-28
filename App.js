import React from 'react';
import { LogBox } from 'react-native';
import { LanguageProvider } from './src/contexts/LanguageContext';
import MainNavigator from './src/navigation/MainNavigator';

// Ignore specific warnings related to Firebase and AsyncStorage
LogBox.ignoreLogs([
  '@firebase/auth: You are initializing Firebase Auth for React Native without providing AsyncStorage.',
  'Analytics: Firebase Analytics is not supported in this environment.',
  'Analytics: IndexedDB unavailable or restricted in this environment.'
]);

const App = () => {
  return (
    <LanguageProvider>
      <MainNavigator />
    </LanguageProvider>
  );
};

export default App;
