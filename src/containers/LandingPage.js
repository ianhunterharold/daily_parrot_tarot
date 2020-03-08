import React from 'react';
import { Button, View, Text } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        picture and better button
      </Text>
      <Button 
        title="Venture"
        onPress={() => navigation.navigate('Ask Away')}
      />
    </View>
  );
}