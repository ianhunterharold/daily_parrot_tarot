import React from 'react';
import { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import cuckoo from '../img/cuckoo.png';
import peacock from '../img/peacock.png';
import plover from '../img/plover.png';
import Styles from '../style/style';
class Card extends Component{
  state = {
    randomCard: {}
    // will assign a random image 
  }

  // componentDidMount(){
  // }

  render(){
    return(
      <>
      <View>
        <Text>Inside of Card Component</Text>
        <ImageBackground
          source={cuckoo}
          style={Styles.Card}
        />
      </View>
      </>
    )
  }


}

export default Card;