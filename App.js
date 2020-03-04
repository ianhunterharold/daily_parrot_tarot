import React from 'react';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button, StatusBar } from 'react-native';
// import { Router, Scene } from 'react-native-router-flux';

// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Styles from './src/style/style.js'
import AskPage from './src/containers/AskPage'
import LandingPage from './src/containers/LandingPage';
import Card from './src/components/Card';


class App extends Component {


  render(){
    return (
      <>
      <View>
        <Text>inside of app</Text>
      </View>
      </>

      // <Router>
      //   {/* <View style={Styles.LandingPageContainer}> */}
      //     <Scene key='root'>
      //       <Scene key='landingPage'
      //       component ={LandingPage}
      //       title="LandingPage"
      //       initial
      //       />
      //     {/* <Text style={Styles.LandingPageInstructions}>
      //       app level 
      //     </Text> */}
      //     <Scene
      //     key="askPage"
      //     component = {AskPage}
      //     title='AskPage'
      //     />
      //   </Scene>
      // </Router>
    );
  }
}

export default App;
