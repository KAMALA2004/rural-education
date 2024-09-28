import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header'; 
import LogoScreen from '../screens/LogoScreen'; 
import WelcomeScreen from '../screens/WelcomeScreen'; 
import SchoolSelectionScreen from '../screens/SchoolSelectionScreen'; 
import CollegeSelectionScreen from '../screens/CollegeSelectionScreen'; 
import HomeScreen from '../screens/HomeScreen'; 
import AssignmentsScreen from '../screens/AssignmentsScreen'; 
import ViewQuizScreen from '../screens/ViewQuizScreen'; 
import LiveClassesScreen from '../screens/LiveClassesScreen'; 
import LearningMaterialScreen from '../screens/LearningMaterialScreen'; 
import RecordingsScreen from '../screens/RecordingsScreen'; 
import LoginScreen from '../screens/LoginScreen'; 
import SignUpScreen from '../screens/SignUpScreen';
import ForumScreen from '../screens/ForumScreen'; 
import ClassDetailsScreen from '../screens/ClassDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const screenOptions = (title) => ({
  header: ({ navigation }) => <Header navigation={navigation} title={title} />,
});

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen 
          name="Logo" 
          component={LogoScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SchoolSelection" 
          component={SchoolSelectionScreen}
          options={screenOptions("School Selection")}
        /> 
        <Stack.Screen 
          name="CollegeSelection" 
          component={CollegeSelectionScreen}
          options={screenOptions("College Selection")}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={screenOptions("Home")}
        />
        <Stack.Screen 
          name="Assignments"  
          component={AssignmentsScreen}
          options={screenOptions("Assignments")}
        />
        <Stack.Screen 
          name="ViewQuiz"  
          component={ViewQuizScreen}
          options={screenOptions("Quiz")}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={screenOptions("Profile")}
        />
        <Stack.Screen 
          name="LiveClasses" 
          component={LiveClassesScreen}
          options={screenOptions("Live Classes")}
        />
        <Stack.Screen 
          name="ClassDetails" 
          component={ClassDetailsScreen}
          options={screenOptions("Class Details")}
        />
        <Stack.Screen 
          name="LearningMaterial"  
          component={LearningMaterialScreen}
          options={screenOptions("Learning Material")}
        />
        <Stack.Screen 
          name="Recordings"  
          component={RecordingsScreen}
          options={screenOptions("Recordings")}
        />
        <Stack.Screen 
          name="Forum"  
          component={ForumScreen}
          options={screenOptions("Forum")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
