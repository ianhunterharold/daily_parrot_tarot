import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AskPage extends Component{
  state ={
    question:''
  }

  onChangeText = (Text) => {
    console.log('Text that you input', Text)
    this.setState({
      question: Text
    })
  }
  onSubmitQuestion = (input) =>{
    // console.log('input, did you clikc the submit', input) worked, great
    // alert("did i touch the button?")
    // remove all elements on the page 
  }


  render(){
    return(
      <View>
        <Text>Inside of AskPage Container</Text>
        <TextInput
          style={{ height: 50, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={text => this.onChangeText(text)}
          // value={value}
        />
        <Button 
        onPress={input => this.onSubmitQuestion(input) }
        title="Ask"
        />
      </View>
    )
  }

}

export default AskPage;