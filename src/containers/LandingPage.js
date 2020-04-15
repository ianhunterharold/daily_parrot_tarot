import React, { Component } from 'react';
import { Button,View, Text,Image } from 'react-native';
import Styles from '../style/style';



export default function LandingPage({ navigation }) {
  
    return (
      <View>
        <Button 
        title="i"
        onPress={ () => navigation.navigate('About Creator') }
        />
        <Text style={Styles.landingPageWelcomeMessage} >
          Welcome to your daily bird reading! {'\n'}
          Venture beyond and ask what is on your mind.
          
        </Text>
        <Image   
          source= {require('../img/landingPageImage.png')}
          style={Styles.LandingPageImageStyle} 
        />
        <Button
          color="#FA6A30"
          title="Venture"
          onPress={() => navigation.navigate('Ask Away')}
        />
      </View>
    );
  }
