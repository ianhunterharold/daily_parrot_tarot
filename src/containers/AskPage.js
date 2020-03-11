import React from 'react';
import { Image, Button, View, Text, TextInput } from 'react-native';
import Styles from '../style/style';

export default function AskPage({ navigation }) {

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
        />
      <Button
        color="#FA6A30"
        title="Ask"
        onPress={() => navigation.navigate('Reading') }
      />
    </View>
  );

}
