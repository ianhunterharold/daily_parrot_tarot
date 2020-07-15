import React from 'react';
import { Image, Button, View, Text, TextInput } from 'react-native';
import Styles from '../style/style';
import { useState } from 'react';
import { Card } from 'react-native-elements';


export default function AskPage({ navigation }) {
  
  const [textInput, setTextInput] = useState('');

  const errorMessage = () => {
    return (
      <Text >Please Ask a Question</Text>
    );
  }

  return (
        <View style ={Styles.outerExterior}>
        <View style={Styles.exteriorContainer} >
      <Card style={Styles.Card}>
      <View>
        <Text style={Styles.questionPageMessage}>
          It's the question that drives us... 
        </Text>
        <TextInput
            style = {Styles.askPageTextInputBox}
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />
        <Text style = {Styles.askPageErrorMessage}>{ textInput ? null: errorMessage()}</Text>
        <Image
          source={require('../img/questionPageParrot.png')}
          style={Styles.CardImage}
        />
        <Button
          color="#FA6A30"
          title="Ask"
          onPress={ () => {
            setTextInput('');
            textInput ? navigation.navigate('Reading'):errorMessage(); 
          }}  
        />
      </View>
      </Card>
    </View>
    </View>
  );
}
