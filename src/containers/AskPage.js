import React from 'react';
import { Image, Button, View, Text, TextInput } from 'react-native';
import Styles from '../style/style';
import { useState } from 'react'

export default function AskPage({ navigation }) {
  
  const [textInput, setTextInput] = useState('')
  
  return (
    <View>
      <Text style={Styles.questionPageMessage}>
        It's the question that drives us... 
      </Text>
      <Image
        source={require('../img/questionPageParrot.png')}
        style={Styles.questionPageImage}
      />

        <TextInput
          style = {Styles.askPageTextInputBox}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      <Button
        color="#FA6A30"
        title="Ask"
        onPress={ () => {
          navigation.navigate('Reading');
          setTextInput(" ");
        }}
          
      />
    </View>
  );
}
