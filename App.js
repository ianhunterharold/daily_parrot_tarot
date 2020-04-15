import 'react-native-gesture-handler';
//line above needs to stay at the top indicated by https://reactnavigation.org/docs/getting-started/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import AskPage from './src/containers/AskPage'
import LandingPage from './src/containers/LandingPage';
import Card from './src/components/Card';
import InformationScreen from './src/containers/InformationScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Daily Tarrot Parrot">
        <Stack.Screen name="About Creator" component={InformationScreen} />
        <Stack.Screen name="Daily Tarrot Parrot" component={LandingPage} />
        <Stack.Screen name="Ask Away" component={AskPage}/>
        <Stack.Screen name="Reading" component={Card}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

