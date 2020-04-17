import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Styles from '../style/style';
import { Card } from 'react-native-elements'


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

class BirdCard extends Component{
  

  randomlySelectABird = () => {
  
              const TURQUOISEPARROT=<><Image 
                source={turquoiseParrot}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                You pulled the turquoise parrot today because you are currently wearing your emotions on your sleeve. No one wants to be a sloppy mess. Take a second to compose yourself, take some deep breaths and fluff your feathers.Everyone knows you are sickening, why don't you believe it?
              </Text>
              </> 

              const EMU=<><Image 
                source={emu}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                You have called upon the emu today because you are playing it cool. You have the vision that your long neck grants you to see far beyond. Keep it that way. Ask for emu energy to keep you calm, you got this girl. 
              </Text>
              </> 

              const BIRDOFPARADISETHREE=<><Image 
                source={birdOfParadiseThree}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Bird of paradise, wowza. Can you believe? You are a diva. Call upon the overwhelming energy of the plumage to help you out. There's a diva within each of us; don't deny her the spotlight. It's your time to Robyn up the situation and dance by yo-self.
              </Text>
              </> 

              const BIRDOFPARADISETWO=<><Image 
                source={birdOfParadiseTwo}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                THE WORK bird of paradise. In your professional endeavors, someone is on FIRE. Now is the time to strategically ask for a raise, push for the promotion and place yourself perfectly poised for that next LEVEL UP! Bad ass boss energy here.
              </Text>
              </> 

              const BIRDOFPARADISEONE=<><Image 
                source={birdOfParadiseOne}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Romantic bird of paradise. Whether romantically inclined, or not, your love sphere is being activated. You know that guy you have been catching glances at on this flight? Well it's time to rub elbows, ask their name and roll the dice. Do it, you know you want to. 
              </Text>
              </> 

              const FALCON=<><Image 
                source={falcon}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Stay vigilant, some upcoming shit is heading your way. Use your agile moves to dodge that clusterf*ck. You have sharp claws, a razor edge beak - don't be too eager to engage. Use your falcon powers to gracefully gtfo. Only engage if it's life or death drop.
              </Text>
              </> 

              const ORIOLE=<><Image 
                source={oriole}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                It's your turn to be a basic bitch. Yes, you. Yes, basic. Basic as in pumpkin spice latte, uggs and sweater weather blankets. It's ok. The overlighting consciousness of the basic bitch is healing if you let it. So let it.
              </Text>
              </> 

              const KINGFISHER=<><Image 
                source={kingfisher}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                You are in major need of some salmon or sushi in your social life. Go fish. Time to explore your options. Maybe it's something taboo? Like exploring your non-preferred self proclaimed sexual, gendered, or otherwise identities. Let your proverbial hair flow, 'cause covergirl, you're worth it. Maybe she was born with it, maybe it's.. maple leaf...
              </Text>
              </> 
              
              const GOOSE=<><Image 
                source={goose}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Watch out, canadians are obsessed with goose products and you might end up as dinner or worse, fired! Goose energy tells you that you in danger gurl! Hike your keys, hide your wallet, hide your family 'cause there's a fire. Ain't nobody got time for that..
              </Text>
              </> 
              
              const PUFFIN=<><Image 
                source={puffin}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Rare, and unique, focus on your individuality. You know you are an endangered species, prune your feathers and let others know how valuable you truly are; Time to ruffle their feathers.
              </Text>
              </> 

              const HUMMINGBIRD=<><Image 
                source={hummingbird}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                The hummingbird is a symbol that you are succeeding! Keep beating those wings because it's working! All of the effort you have put into this theme is finally paying off. Time to cash in on your investment. Cha ching.
              </Text>
              </> 
              const MOLTRES=<><Image 
                source={moltres}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                The phoenix energy is calling you to rise from your ashes. You need to accept that something is about to change form, and the phoenix is alerting you to this. Do what needs to be done to complete the transformation.
              </Text>
              </>        
              const VULTURE=<><Image 
                source={vulture}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Vulture energy offers us a chance to face and forgive a part of our nature that we find hard to accept. While our shadow side remains hidden and unexamined, it exerts enormous power, causing us to do things we hate in ourselves. Once we have owned these unredeemed aspects, their power can become constructive rather than destructive.
              </Text>
              </>        
    
              const PHEASANT=<><Image 
                source={pheasant}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Pheasant energy indicates that we are connecting with our own power and authority. The shadow aspect of our nature has been tamed, it no longer undermines our progression towards a full connection with our source of power. Use the energy of the Pheasant to fully actualize your power. Power isn't evil, but tends to lean in that direction. Use responsibly.
              </Text>
              </>

              const HERON=<><Image 
                source={heron}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>
                Selecting the Heron today, is a call to purify yourself. Maybe you are being prepared for a major shift in consciousness, or maybe you have allowed the accretion of too much old energy to build up in your system. It may signal a look at your diet; perhaps a detoxifying regime is needed. Harness the power of the Heron to cleanse thyself.
              </Text>
              </>

              const OWL=<><Image 
                source={owl}
                style={Styles.CardImage}
              />
              <Text style={Styles.cardDescription}>  
                Owl energy is ancient reflection. You have a full 180 degrees to look around you. Thanks neck. Take some alone time and self reflection, but seriously. 
              </Text>
              </>

              const OSTRICH= <><Image
                source={ostrich}
                style={Styles.CardImage}
              />
              <Text style ={Styles.cardDescription}>
                Use those powerful legs and jettison yourself into the future you are desiring. It's your time to put your solid feet to the ground and launch yourself into the hot summer day. 
              </Text></>
              
                const PEACOCK= <><Image
                  source={peacock}
                  style={Styles.CardImage}
                />
                <Text style ={Styles.cardDescription}>
                    Work on your image with yourself and others. Peacock energy is all about perception. It is impossible to influence everyone's thoughts of you. Only control the ones you know would make a positive impact. Perception is reality, but don't take it too seriously.
                  </Text></>

              const FLAMINGO = <><Image
                source={flamingo} 
                style={Styles.CardImage}
              />
              <Text style ={Styles.cardDescription}>
                You are what you eat, make sure you are ingesting the right things. Both mentally, spiritually, and physically. Remember that the Flamingo is pink because of the canthaxanthin it consumes through the shrimp and blue green algae. If we are what we eat, I'm a loaf of bread and 4 hard boiled eggs. Time to be more conscious of what we consume.
              </Text></>

              const PENGUIN= <><Image
                source={penguin}
                style={Styles.CardImage}
              />
              <Text style ={Styles.cardDescription}>
                You can endure the harsh winters of the antarctic, avoid being eaten by seals and whales. Make sure your tough exterior still protects your warm and soft undercoat. Your down is what those closest to you will know you for, not your gortex triple wind protected exterior.
              </Text></>
              

    let randomBirdsArray = [ PENGUIN,TURQUOISEPARROT,EMU, BIRDOFPARADISEONE,BIRDOFPARADISETWO,BIRDOFPARADISETHREE,FALCON,FLAMINGO,GOOSE,HERON,HUMMINGBIRD,KINGFISHER,MOLTRES,ORIOLE,OSTRICH,OWL,PEACOCK,PHEASANT,PUFFIN,VULTURE ] 
    // 


    // randomly selects a bird from the array 
    let randomSelectionOfBird = randomBirdsArray[Math.floor(Math.random() * randomBirdsArray.length)] 
    return randomSelectionOfBird
  }

  render(){
    return(
      <>
        <View style ={Styles.outerExterior}>
        <View style={Styles.exteriorContainer} >
        <Card style={Styles.Card}>
          <View>
            {this.randomlySelectABird()}
          </View>
        </Card>  
        </View>
        </View>
      </>
    )
  }
}

export default BirdCard;

{/* <View style={Styles.mostExterior}> */}
        {/* <View style={Styles.exteriorContainer}> */} 
        {/* </View> */}
      {/* </View> */}