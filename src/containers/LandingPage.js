import React from 'react';
import { Component } from 'react';
import { View,Text,Button } from 'react-native';
import Styles from '../style/style';

class LandingPage extends Component{

  render(){
    return(
      <View>
        <Button 
        // style = { Styles.landingPageButton }
        // looking at add border, not visible currently

        title="venture"
        border='visible'
        >
        </Button>
        <Text>In the landing page container</Text>
      </View>
    )
  }
}

export default LandingPage;