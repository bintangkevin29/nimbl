import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CleaningType from '../../components/cleaning-type/CleaningType';
import CustomHeader from '../../components/custom-header/CustomHeader';
import ExtraStack from '../../components/extra-stack/ExtraStack';
import FrequencyStack from '../../components/frequency-stack/FrequencyStack';
import MainBody from '../../components/main-body/MainBody';
import PrimaryBackground from '../../components/primary-background/PrimaryBackground';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('Landing');
  }, []);

  return (
    <PrimaryBackground>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader>Your Plan</CustomHeader>
        <MainBody>
          <CleaningType />
          <FrequencyStack />
          <ExtraStack />
        </MainBody>
      </ScrollView>
    </PrimaryBackground>
  );
};

export default HomeScreen;
