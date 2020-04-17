import React from 'react';
import { Image, Button, View, Text, TextInput } from 'react-native';
import Styles from '../style/style';
import { useState } from 'react';
import { Card } from 'react-native-elements';


export default function AskPage({ navigation }) {
  
  const [textInput, setTextInput] = useState('')
  
  return (
        <View style ={Styles.outerExterior}>
        <View style={Styles.exteriorContainer} >
      <Card style={Styles.Card}>
      <View>
      {/* style={Styles.exteriorContainer} */}
        <Text style={Styles.questionPageMessage}>
          It's the question that drives us... 
        </Text>
        <TextInput
            style = {Styles.askPageTextInputBox}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        <Image
          source={require('../img/questionPageParrot.png')}
          style={Styles.CardImage}
        />
        <Button
          color="#FA6A30"
          title="Ask"
          onPress={ () => {
            navigation.navigate('Reading');
            setTextInput(' ');
          }}  
        />
      </View>
      </Card>
    </View>
    </View>
  );
}
