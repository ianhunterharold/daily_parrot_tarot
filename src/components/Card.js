import React from 'react';
import { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Styles from '../style/style';

import owl from '../img/owl.png';
import peacock from '../img/peacock.png';
import ostrich from '../img/ostrich.png';
import flamingo from '../img/flamingo.png';
import penguin from '../img/penguin.png';
import heron from '../img/heron.png';
import pheasant from '../img/pheasant.png';
import vulture from '../img/vulture.png';

import turquoiseParrot from '../img/turquoiseParrot.png'

class Card extends Component{

  randomlySelectABird = () => {

              const VULTURE=<>
              <Image 
              source={vulture}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                VULTURE ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              </>        
    
              const PHEASANT=<>
              <Image 
              source={pheasant}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                PHEASANT ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              </>

              const HERON=<>
              <Image 
              source={heron}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                HERONLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              </>

              const OWL=<>
              <Image 
              source={owl}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                OWLL cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              </>

              const OSTRICH= <><Image
                source={ostrich}
                style={Styles.cardImageStyling}
              /><Text style ={Styles.cardDescription}>11111111 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>
              
                const PEACOCK= <><Image
                  source={peacock}
                  style={Styles.cardImageStyling}
                /><Text style ={Styles.cardDescription}>22222 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>

              const FLAMINGO =<><Image
                source={flamingo} // just sourcing the ostrich to see what it looks like neck is cut off 
                style={Styles.cardImageStyling}
              /><Text style ={Styles.cardDescription}>33333 cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>

              const PENGUIN= <><Image
                source={penguin}
                style={Styles.cardImageStyling}
              /><Text style ={Styles.cardDescription}>PENGUIN UPTODATE GOOD TO GO! MINUS TEXT cuckoo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></>
              

    let randomBirdsArray = [ PEACOCK, VULTURE]   //, FLAMINGO, PEACOCK, PENGUIN, OWL, OSTRICH, HERON, PHEASANT
    // randomly selects a bird from the array 
    let randomSelectionOfBird = randomBirdsArray[Math.floor(Math.random() * randomBirdsArray.length)] 
    return randomSelectionOfBird
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