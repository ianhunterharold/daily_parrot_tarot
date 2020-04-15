import React, { Component } from 'react';
import { Button,View, Text,Image, TouchableOpacity } from 'react-native';
import Styles from '../style/style';



export default function LandingPage({ navigation }) {
  
    return (
      <View>
        <Text style={Styles.landingPageWelcomeMessage} >
          Welcome to your daily bird reading! {'\n'}
          Venture beyond and ask what is on your mind.
        </Text>
        <TouchableOpacity
        onPress= { () => navigation.navigate('About Creator') }
        >
        <Image   
          source= {require('../img/landingPageImage.png')}
          style={Styles.LandingPageImageStyle} 
        />
        </TouchableOpacity>
        <Button
          color="#FA6A30"
          title="Venture"
          onPress={() => navigation.navigate('Ask Away')}
        />
      </View>
    );
  }
