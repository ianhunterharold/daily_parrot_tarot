import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Styles from './src/style/style.js'

const App: () => React$Node = () => {
  return (
    <>
    
      <SafeAreaView>
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>   
            <Text>Hello World</Text>         
            </View>
          </View>
    
      </SafeAreaView>
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
