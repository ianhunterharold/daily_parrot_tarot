import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';
class Card extends Component{
  state = {
    randomCard: {}
    // will assign a random image 
  }

  render(){
    return(
      <>
      <View>
        
        <Image
          source={require('../img/peacock.png')}
          style={Styles.cardImageStyling}
        />
        <Text style ={Styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      </>
    )
  }
}

export default Card;