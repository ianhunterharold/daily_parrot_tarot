import React from 'react';
import { Component } from 'react';
import { View,Text,Button } from 'react-native';
import Styles from '../style/style';
import AskPage from './AskPage';

class LandingPage extends Component{

  state = {
    clickedOnButton: 'false'
  }

  handleLandingPageTouch = () => {
    console.log("did I touch the button?")
    //after touching the button render, a new component
    this.setState({
      clickedOnButton: 'true'
    })
  }

  renderAskPageComponent = () => {
    if (this.state.clickedOnButton === 'true'){
      return <AskPage/>
    }
  }

  render(){
    return(
      <View >
        {this.renderAskPageComponent()}
        <Button 
        onPress={this.handleLandingPageTouch}
        title="venture"
        >
        </Button>
        <Text style={Styles.LandingPageInstructions}>landing page, make it look good </Text>
      </View>
    )
  }
}

export default LandingPage;