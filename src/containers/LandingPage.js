import React from 'react';
import { Component } from 'react';
import { View,Text,Button } from 'react-native';
import Styles from '../style/style';
import AskPage from './AskPage';


class LandingPage extends Component{
  state = {
    askPageComponentRender: 'false',
  }

  handleLandingPageTouch = () => {
    //after touching the button render, a new component
    this.setState({
      askPageComponentRender: 'true'
    })
  }

  renderAskPageComponent = () => {
    if (this.state.askPageComponentRender === 'true'){
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
        />
      </View>
    )
  }
}

export default LandingPage;