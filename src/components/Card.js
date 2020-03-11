import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';

import cuckoo from '../img/cuckoo.png';
import peacock from '../img/peacock.png';
import plover from '../img/plover.png';


class Card extends Component{
  state = {
    arrayOfBirds: [cuckoo, peacock, plover]
  }


  randomlySelectABird = () => {
    let randomBird = this.state.arrayOfBirds[2]
    console.log("randombird", randomBird)  
    console.log("are we inside of random bird")
    //at this point prove that it can work before randomizing it. 
    // return (
    //   <Image 
    //     source={require(`../img${randomBird}.png`)}
    //     style={Styles.cardImageStyling}
    //   />
    // )
  }

  render(){
    return(
      <>
      <View>
        {this.randomlySelectABird()}
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