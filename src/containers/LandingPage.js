import React, { Component } from 'react';
import { Button, View, Text,Image } from 'react-native';
import landingPageImage from '../img/landingPageImage.png'
import Styles from '../style/style';




export default function LandingPage({ navigation }) {

// class LandingPage extends Component{
    return (
      // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      <View>
        <Image   
          source= {landingPageImage}
          style={Styles.LandingPageImageStyle} 
        />
        <Text>
          picture and better button
        </Text>
        <Button 
          title="Venture"
          onPress={() => navigation.navigate('Ask Away')}
        />
      </View>
    );
  }

// export default LandingPage;