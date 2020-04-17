import React from 'react';
import { Text, View, StyleSheet, Linking, Image} from 'react-native';
import Styles from '../style/style';
import { Card } from 'react-native-elements';


const pheasant = require('../img/pheasant.png');

export default function InformationScreen({navigation}){
  return (
    <>
    <View style ={Styles.outerExterior}>
        <View style={Styles.exteriorContainer} >
        <Card>
        <View >
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
          style={Styles.CardImage}
          />
          <Text 
            onPress= { () => Linking.openURL('https://www.freepik.com/free-photos-vectors/Watercolor')} 
            style={Styles.imageCredt}>
            ℹ️ Images provided by freepik.com
          </Text>
        </View>
        </Card>
      </View>
    </View>
    </>
  )
}

