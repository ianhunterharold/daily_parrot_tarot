import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';

class AskPage extends Component{
  state ={
    question:'',
    clickedOnAsk: 'false'
  }

  onChangeText = (Text) => {
    // console.log('Text that you input', this.state.question)
    this.setState({
      question: Text
    })
  }

  renderCardComponent = () => {
    if(this.state.clickedOnAsk === 'true'){
      console.log(this.state.clickedOnAsk,"clicked on ask")
      return <Card/>
    }
  }
  onSubmitQuestion = (input) => {
    // console.log('input, did you clikc the submit', input) worked, great
    // alert("did i touch the button?")
    // remove all elements on the page 
    this.setState({
      clickedOnAsk: 'true'
    }) 
  }
  
  render(){
    return(
      <View>
        {this.renderCardComponent()}
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