import 'react-native-gesture-handler';
//line above needs to stay at the top indicated by https://reactnavigation.org/docs/getting-started/

import * as React from 'react';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
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

    useEffect(()=> {
      SplashScreen.hide();
    }, []);
    // immitates react lifecyle method cdm     

  return (
    <View style ={Styles.outerExterior}>
    <View style={Styles.exteriorContainer} >
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Parrot Tarot Reading">
        <Stack.Screen name="About Creator" component={InformationScreen} />
        <Stack.Screen name="Parrot Tarot Reading" component={LandingPage} />
        <Stack.Screen name="Ask Away" component={AskPage}/>
        <Stack.Screen name="Reading" component={ BirdCard }/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>  
    </View>
  );
}

