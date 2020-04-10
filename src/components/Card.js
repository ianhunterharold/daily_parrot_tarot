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
import moltres from '../img/moltres.png';
import hummingbird from '../img/hummingbird.png';
import puffin from '../img/puffin.png';
import goose from '../img/goose.png';
import kingfisher from '../img/kingfisher.png';
import oriole from '../img/oriole.png';
import falcon from '../img/falcon.png';
import birdOfParadiseOne from '../img/birdOfParadiseOne.png';
import birdOfParadiseTwo from '../img/birdOfParadiseTwo.png';
import birdOfParadiseThree from '../img/birdOfParadiseThree.png';
import emu from '../img/emu.png'; 
import turquoiseParrot from '../img/turquoiseParrot.png';

class Card extends Component{
  

  randomlySelectABird = () => {
  

              const TURQUOISEPARROT=<>
              <Image 
              source={turquoiseParrot}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
              EMU 
              </Text>
              </> 

              const EMU=<>
              <Image 
              source={emu}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
              EMU 
              </Text>
              </> 

              const BIRDOFPARADISETHREE=<>
              <Image 
              source={birdOfParadiseThree}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                BIRD of paradise THREE ENERGY! 
              </Text>
              </> 

              const BIRDOFPARADISETWO=<>
              <Image 
              source={birdOfParadiseTwo}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                BIRD of paradise energy one! 
              </Text>
              </> 

              const BIRDOFPARADISEONE=<>
              <Image 
              source={birdOfParadiseOne}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                BIRD of paradise energy one! 
              </Text>
              </> 

              const FALCON=<>
              <Image 
              source={falcon}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                falcon energy
              </Text>
              </> 

              const ORIOLE=<>
              <Image 
              source={oriole}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                oriole energy yaaaas!
              </Text>
              </> 

              const KINGFISHER=<>
              <Image 
              source={kingfisher}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                King Fisher
              </Text>
              </> 
              
              const GOOSE=<>
              <Image 
              source={goose}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                GOOSE BADASS
              </Text>
              </> 
              
              const PUFFIN=<>
              <Image 
              source={puffin}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                PUFFIN BADASS
              </Text>
              </> 

              const HUMMINGBIRD=<>
              <Image 
              source={hummingbird}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                The hummingbird card has presented itself to you today because right now in life, you are liberating yourself from the heavy chains of the past and starting to lift into the light of joy.The hummingbird is a symbol that you are succeeding! Your time of suffering is drawing to a close and that you can expect magic and wonderment to fill your days. 
              </Text>
              </> 
              const MOLTRES=<>
              <Image 
              source={moltres}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                The phoenix is a sign that you are needing their energy to rise up out of the calamity and turn something into a personal triumph. You need to accept that something is about to change form, and the phoenix is alerting you to this. Remember that you, as a soul, can never be destroyed; the phsical form of things changes, but the spirit behind all things is eternal. The essential 'you' cannot be changed. Rise from the ashes and do what needs to be done! 
              </Text>
              </>        
              const VULTURE=<>
              <Image 
              source={vulture}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                Vulture energy offers us a chance to face and forgive a part of our nature that we find hard to accept. We all have our shadow side. White it remains hidden and unexamined, it exerts enormous power, causing us to do things we hate in ourselves.Once we have owned these unredeemed aspects and face them conciously, their power can become constructive rather than destructive.
              </Text>
              </>        
    
              const PHEASANT=<>
              <Image 
              source={pheasant}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                Pheasant energy indicates that we are connecting with our own power and authority. The shadow aspect of our nature has been tamed, it no longer undermines our prgression towards a full connection with our source of power. Use the energy of the Pheasant to fully actualize your power. Power isn't evil, but tends to lean in that direction. Use your new found power responsibly.
              </Text>
              </>

              const HERON=<>
              <Image 
              source={heron}
              style={Styles.cardImageStyling}
              />
              <Text style={Styles.cardDescription}>
                Selecting the Heron today, is a call to purify yourself. Maybe you are being prepared for a major shift in consciousness, or maybe you have allowed the accretion of too much old energy to build up in your system. It may signal a look at your diet; perhaps a detoxifying regime is needed. Harness the power of the Heron to clense thyself. 
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
              

    let randomBirdsArray = [ FALCON ] 

    // TURQUOISEPARROT, HUMMINGBIRD, FLAMINGO, PEACOCK, PENGUIN, OWL, OSTRICH, HERON, PHEASANT, PEACOCK, VULTURE, MOLTRES, , GOOSE,KINGFISHER,ORIOLE,,, ,EMU, PUFFIN, FALCON, BIRDOFPARADISEONE,BIRDOFPARADISETHREE, BIRDOFPARADISETWO

    // TURQUOISEPARROT, HUMMINGBIRD, FLAMINGO, PEACOCK, PENGUIN, OWL, OSTRICH, HERON, PHEASANT, PEACOCK, VULTURE, MOLTRES, PUFFIN, GOOSE,KINGFISHER,ORIOLE,RAVEN,BIRDOFPARADISETWO, BIRDOFPARADISEONE,BIRDOFPARADISETHREE,EMU
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