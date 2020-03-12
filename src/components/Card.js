import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';

import cuckoo from '../img/cuckoo.png';
import peacock from '../img/peacock.png';
import plover from '../img/plover.png';


class Card extends Component{
  state = {
    randomBird:''
  }


  randomlySelectABird = () => {

              const CUCKOO= <Image
                source={cuckoo}
                style={Styles.cardImageStyling}
              />

                const PEACOCK= <Image
                  source={peacock}
                  style={Styles.cardImageStyling}
                /> 

              const PLOVER = <Image
                source={peacock}
                style={Styles.cardImageStyling}
              /> 

    let randomBirdsArray = [ CUCKOO, PLOVER, PEACOCK ]
    // randomly selects a bird from the array 
    let randomSelectionOfBird = randomBirdsArray[Math.floor(Math.random() * randomBirdsArray.length)] 
    console.log(typeof randomSelectionOfBird)
    // display bird on the page 
    // reference to an image is giving me a number, with type of number. 
    // assign the constant to be a react native image component 
    console.log(randomSelectionOfBird)
    return randomSelectionOfBird
  }

  render(){
    return(
      <>
      <View>
        {this.randomlySelectABird()}
        <Text style ={Styles.cardDescription}>11111 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      </>
    )
  }
}

export default Card;