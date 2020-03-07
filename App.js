import 'react-native-gesture-handler';
//line above needs to stay at the top indicated by https://reactnavigation.org/docs/getting-started/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// import React from 'react';
// import { Component } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar } from 'react-native';

// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Styles from './src/style/style.js'
import AskPage from './src/containers/AskPage'
import LandingPage from './src/containers/LandingPage';
import Card from './src/components/Card';
// import AppNavigator from './src/containers/AppNavigator';


// class App extends Component {
  
//   render(){
//     return(
//       // <>
//       //   <View style={Styles.LandingPageContainer}>
//       //   <Text>inside of app</Text>
//           {/* <LandingPage/> */}
//           <NavigationContainer>{ <AppNavigator/> }</NavigationContainer>
//         {/* </View>
//       </> */}
//     )
//   }
// }

// export default App;
// {/* <AppNavigator/> */}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

