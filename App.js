import 'react-native-gesture-handler';
//line above needs to stay at the top indicated by https://reactnavigation.org/docs/getting-started/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native';

import AskPage from './src/containers/AskPage'
import LandingPage from './src/containers/LandingPage';
import BirdCard from './src/components/BirdCard';
import InformationScreen from './src/containers/InformationScreen';
import Styles from './src/style/style';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={Styles.mostExterior}>
    <View style={Styles.exteriorContainer} >
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Daily Tarrot Parrot">
        <Stack.Screen name="About Creator" component={InformationScreen} />
        <Stack.Screen name="Daily Tarrot Parrot" component={LandingPage} />
        <Stack.Screen name="Ask Away" component={AskPage}/>
        <Stack.Screen name="Reading" component={ BirdCard }/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>  
    </View>
  );
}

