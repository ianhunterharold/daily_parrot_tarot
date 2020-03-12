import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';

import cuckoo from '../img/cuckoo.png';
import peacock from '../img/peacock.png';
import plover from '../img/plover.png';

const CUCKOO= cuckoo;
console.log(CUCKOO)
const PEACOCK= peacock;
const PLOVER= plover;

class Card extends Component{
  state = {
    randomBird:''
  }



  randomlySelectABird = () => {
    let randomBirdsArray = [ CUCKOO, PLOVER, PEACOCK ]
    // randomly selects a bird from the array 
    let randomSelectionOfBird = randomBirdsArray[Math.floor(Math.random() * randomBirdsArray.length)] 
    console.log(typeof randomSelectionOfBird)
    // display bird on the page 
    // reference to an image is giving me a number, with type of number. 
  }

  render(){
    return(
      <>
      <View>
        {this.randomlySelectABird()}
        <Image
          source={CUCKOO}
          style={Styles.cardImageStyling}
        />
        <Text style ={Styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      </>
    )
  }
}

export default Card;