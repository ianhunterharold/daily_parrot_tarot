import React from 'react';
import { Component } from 'react';
import { View,Text,Button } from 'react-native';
import Styles from '../style/style';

class LandingPage extends Component{

  handleLandingPageTouch = () => {
    console.log("did I touch the button?")
    //after touching the button render, a new component
    
  }

  render(){
    return(
      <View >
        <Button 
        onPress={this.handleLandingPageTouch}
        title="venture"
        >
        </Button>
        <Text style={Styles.LandingPageInstructions}>In the landing page container</Text>
      </View>
    )
  }
}

export default LandingPage;