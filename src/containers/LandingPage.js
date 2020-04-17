import React, { Component } from 'react';
import { Button,View, Text,Image, TouchableOpacity } from 'react-native';
import Styles from '../style/style';
import { Card } from 'react-native-elements';


export default function LandingPage({ navigation }) {
  
    return (
      <View style ={Styles.outerrExterior}>
        <View style={Styles.exteriorContainer} >
        <Card style={Styles.Card}>
        <View >
        {/* style={Styles.exteriorContainer}  */}
          <Text style={Styles.landingPageWelcomeMessage} >
            Welcome to your daily bird reading! 
            {'\n'}
            {'\n'}
            Venture beyond and ask what is on your mind.
          </Text>
          
          <TouchableOpacity
          onPress= { () => navigation.navigate('About Creator') }
          >
          <Image   
            source= {require('../img/landingPageImage.png')}
            style={Styles.CardImage}
          />
          </TouchableOpacity>
        
          <Button
            color="#FA6A30"
            title="Venture"
            onPress={() => navigation.navigate('Ask Away')}
          />
        </View>
        </Card> 
        </View>
      </View>
      
    );
  }
