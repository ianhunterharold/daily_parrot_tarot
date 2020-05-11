import React from 'react';
import { Image, Button, View, Text, TextInput } from 'react-native';
import Styles from '../style/style';
import { useState, useEffect } from 'react';
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
            onChangeText={(text) => setTextInput(text)}
          />
        <Image
          source={require('../img/questionPageParrot.png')}
          style={Styles.CardImage}
        />
        <Button
          color="#FA6A30"
          title="Ask"
          onPress={ () => {
            textInput ? navigation.navigate('Reading'):null; 
              //navigate if textInput exists 
            setTextInput(''); 
          }}  
        />
      </View>
      </Card>
    </View>
    </View>
  );
}
