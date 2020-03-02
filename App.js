import React from 'react';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar } from 'react-native';

// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Styles from './src/style/style.js'
import AskPage from './src/containers/AskPage'
import LandingPage from './src/containers/LandingPage';
import Card from './src/components/Card';


class App extends Component {


  render(){
    return (
      <>
        <View style={Styles.LandingPageContainer}>
          <LandingPage/>
          <Text style={Styles.LandingPageInstructions}>
            app level 
          </Text>
        </View>
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   // will abstract out styling into seperate component and then import it
//   //task for monday feb 17th 2020
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24
//   }
// });

export default App;
