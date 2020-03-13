import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';

import cuckoo from '../img/cuckoo.png';
import peacock from '../img/peacock.png';
import plover from '../img/plover.png';
import ostrich from '../img/ostrich.png'
import flamingo from '../img/flamingo.png';
import turquoiseParrot from '../img/turquoiseParrot.png'

class Card extends Component{

  randomlySelectABird = () => {

              const CUCKOO= <><Image
                source={flamingo}
                style={Styles.cardImageStyling}
              /><Text style ={Styles.cardDescription}>11111111 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>
              
                const PEACOCK= <><Image
                  source={turquoiseParrot}
                  style={Styles.cardImageStyling}
                /><Text style ={Styles.cardDescription}>22222 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>

              const PLOVER =<><Image
                source={flamingo} // just sourcing the ostrich to see what it looks like neck is cut off 
                style={Styles.cardImageStyling}
              /><Text style ={Styles.cardDescription}>33333 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>

    let randomBirdsArray = [ CUCKOO, PLOVER, PEACOCK ]
    // randomly selects a bird from the array 
    let randomSelectionOfBird = randomBirdsArray[Math.floor(Math.random() * randomBirdsArray.length)] 

    this.accompanyTextWithCorespondingBird(randomSelectionOfBird)
    console.log(randomSelectionOfBird)
    return randomSelectionOfBird
  }

  accompanyTextWithCorespondingBird = (randomSelectionOfBird) => {
    console.log(randomSelectionOfBird,"can we see the randomSelectionOfBird in here?")
    
    // match some identifier on the object and return the text

  }

  render(){
    return(
      <>
      <View>
      {this.randomlySelectABird()}
      </View>
      </>
    )
  }
}

export default Card;