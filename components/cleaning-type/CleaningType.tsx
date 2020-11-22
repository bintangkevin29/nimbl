import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import CheckCircle from '../check-circle/CheckCircle';
import ContentStack from '../content-stack/ContentStack';
import CustomTouchable from '../custom-touchable/CustomTouchable';

import {cleaningTypeStyle} from './cleaningTypeStyle';

const CleaningType: React.FC = () => {
  const [cleaningType, setCleaningType] = useState<'initial' | 'upkeep'>(
    'initial',
  );

  return (
    <ContentStack title="Selected Cleaning">
      <View style={cleaningTypeStyle.cleaningTypeContainer}>
        <View style={cleaningTypeStyle.cleaningType}>
          <Image
            resizeMode="contain"
            style={cleaningTypeStyle.cleaningTypeImage}
            source={require('../../assets/images/cleaning-1.png')}
          />
          <CustomTouchable
            style={cleaningTypeStyle.selectionTouchable}
            onPress={() => setCleaningType('initial')}>
            <Text style={cleaningTypeStyle.cleaningTypeText}>
              Initial Cleaning
            </Text>
            <CheckCircle selected={cleaningType === 'initial'} />
          </CustomTouchable>
        </View>
        <View style={cleaningTypeStyle.cleaningType}>
          <Image
            resizeMode="contain"
            style={cleaningTypeStyle.cleaningTypeImage}
            source={require('../../assets/images/cleaning-2.png')}
          />
          <CustomTouchable
            activeOpacity={0.7}
            style={cleaningTypeStyle.selectionTouchable}
            onPress={() => setCleaningType('upkeep')}>
            <Text style={cleaningTypeStyle.cleaningTypeText}>
              Upkeep Cleaning
            </Text>
            <CheckCircle selected={cleaningType === 'upkeep'} />
          </CustomTouchable>
        </View>
      </View>
    </ContentStack>
  );
};

export default CleaningType;
