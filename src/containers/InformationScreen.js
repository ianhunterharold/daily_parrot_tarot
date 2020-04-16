import React from 'react';
import { Text, View, StyleSheet, Linking, Image} from 'react-native';
import Styles from '../style/style';


const pheasant = require('../img/pheasant.png');

export default function InformationScreen({navigation}){
  return (
    <>
      <View style={Styles.exteriorContainer}>
      <Text 
        onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/ianhunterharold') } 
        style={Styles.link}>
        ℹ️ Created by Ian Hunter Harold 
      </Text>
      <Text 
        onPress={ ()=> Linking.openURL('https://apps.apple.com/us/developer/secure-speak-llc/id1169875966')}
        style = {Styles.rateMe}
        >
        Rate Me! {'\n'} 
        ⭐️⭐️⭐️⭐️⭐️
      </Text>
      <Image 
      source={pheasant} 
      style={Styles.infoPagePicture}
      />
      <Text 
        onPress= { () => Linking.openURL('https://www.freepik.com/free-photos-vectors/Watercolor')} 
        style={Styles.imageCredt}>
        ℹ️ Images provided by freepik.com
      </Text>
      </View>
  </>
  )
}

