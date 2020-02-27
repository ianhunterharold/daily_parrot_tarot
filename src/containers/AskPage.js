import React from 'react';
import { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class AskPage extends Component{

  onChangeText = (Text) => {

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
      </View>
    )
  }

}

export default AskPage;