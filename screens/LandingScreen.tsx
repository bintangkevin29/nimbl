import {NavigationScreenProp} from 'react-navigation';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface LandingScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Hello World cok</Text>
      <Button onPress={() => navigation.navigate('Dead')} title="Click Me" />
    </View>
  );
};

export default LandingScreen;
