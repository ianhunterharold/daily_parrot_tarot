import React from 'react';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

// import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Styles from './src/style/style.js'
import LandingPage from './src/containers/LandingPage';
// import AskPage from './src/containers/AskPage';
import Card from './src/components/Card';

const App: () => React$Node = () => {

  return (
    <>
      {/* <SafeAreaView> */}
      {/* style={Styles.body} */}
          <View style={Styles.LandingPageContainer}>
            {/* style={Styles.sectionContainer} */}
            <LandingPage/>
            {/* <Card/> */}
            {/* <Text>Hello World in app.js</Text> */}
          </View>
      {/* </SafeAreaView> */}
    </>
  );
};

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
