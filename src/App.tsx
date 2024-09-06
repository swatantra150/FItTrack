import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Exercises from './screens/Exercises'
import { useNavigation } from '@react-navigation/native';
import ExerciseDetail from './screens/ExerciseDetail';
const Stack=createNativeStackNavigator()
enableScreens()
const App=()=>{
  const isDarkMode = useColorScheme() === 'dark';

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Exercises' component={Exercises}/>
        <Stack.Screen name='ExerciseDetail' component={ExerciseDetail}
        options={{presentation:'modal'}}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
