import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

// state ={
//   question:'',
//   clickedOnAsk: 'false'
// }

// onChangeText = (Text) => {
//   // console.log('Text that you input', this.state.question)
//   this.setState({
//     question: Text
//   })
// }

// understand how a function works with state and functions 

export default function AskPage({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AskPage, picture, better button</Text>
        <TextInput
          style={{ height: 50, width: 150, borderColor: 'gray', borderWidth: 3 }}
          // onChangeText={text => this.onChangeText(text)}
          // value={value}
        />
      <Button
        title="It's the question that drives us..."
        onPress={() => navigation.navigate('Reading')}
      />
    </View>
  );
}
