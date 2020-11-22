import React from 'react';
import {Text, View} from 'react-native';
import ContentStack from '../content-stack/ContentStack';
import ExtraIcon from '../extra-icon/ExtraIcon';

import {extraStackStyle} from './extraStackStyle';

const ExtraStack: React.FC = () => {
  return (
    <ContentStack title="Selected Extras">
      <View style={extraStackStyle.container}>
        <ExtraIcon
          count={4}
          imageSource={require('../../assets/images/icon-fridge.png')}
          title="Inside Fridge"
        />
        <ExtraIcon
          imageSource={require('../../assets/images/icon-basket.png')}
          title="Organizing"
        />
        <ExtraIcon
          count={10}
          imageSource={require('../../assets/images/icon-window.png')}
          title="Inside Fridge"
        />
      </View>
      <View style={extraStackStyle.container}>
        <ExtraIcon
          imageSource={require('../../assets/images/icon-umbrella.png')}
          title="Patio"
        />
        <ExtraIcon
          imageSource={require('../../assets/images/icon-basket.png')}
          title="Organizing"
        />
        <ExtraIcon
          count={10}
          imageSource={require('../../assets/images/icon-window.png')}
          title="Small Blinds"
        />
      </View>
    </ContentStack>
  );
};

export default ExtraStack;
