import React, { Component } from 'react';
import { Button, View, Text,Image } from 'react-native';
// import landingPageImage from '../img/landingPageImage.png'
import Styles from '../style/style';




export default function LandingPage({ navigation }) {

// class LandingPage extends Component{
    return (
      // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      <View>
        
        <Text style={Styles.landingPageWelcomeMessage} >
          Welcome to your daily bird reading! Venture beyond and ask what is on your mind.
        </Text>
        <Image   
          source= {require('../img/landingPageImage.png')}
          style={Styles.LandingPageImageStyle} 
        />
        <Button 
          color="#FAD661"
          title="Venture"
          onPress={() => navigation.navigate('Ask Away')}
        />
      </View>
    );
  }

// export default LandingPage;