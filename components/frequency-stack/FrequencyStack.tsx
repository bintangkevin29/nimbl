import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ContentStack from '../content-stack/ContentStack';
import CustomButton from '../custom-button/CustomButton';
import CustomTouchable from '../custom-touchable/CustomTouchable';
import {frequencyStackStyle} from './frequencyStackStyle';

const FrequencyStack: React.FC = () => {
  const [frequency, setFrequency] = useState<
    'weekly' | 'bi-weekly' | 'monthly'
  >('monthly');

  return (
    <ContentStack title="Selected Frequency">
      <View style={frequencyStackStyle.container}>
        <View style={frequencyStackStyle.buttonContainer}>
          <CustomTouchable onPress={() => setFrequency('weekly')}>
            <CustomButton selected={frequency === 'weekly'} title="Weekly" />
          </CustomTouchable>
        </View>
        <View style={frequencyStackStyle.buttonContainer}>
          <CustomTouchable onPress={() => setFrequency('bi-weekly')}>
            <CustomButton
              selected={frequency === 'bi-weekly'}
              title="Bi-weekly"
            />
          </CustomTouchable>
        </View>
        <View style={frequencyStackStyle.buttonContainer}>
          <CustomTouchable onPress={() => setFrequency('monthly')}>
            <CustomButton selected={frequency === 'monthly'} title="Monthly" />
          </CustomTouchable>
        </View>
      </View>
    </ContentStack>
  );
};

export default FrequencyStack;
