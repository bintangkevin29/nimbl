import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CleaningType from '../../components/cleaning-type/CleaningType';
import CustomHeader from '../../components/custom-header/CustomHeader';
import MainBody from '../../components/main-body/MainBody';
import PrimaryBackground from '../../components/primary-background/PrimaryBackground';

const HomeScreen: React.FC = () => {
  return (
    <PrimaryBackground>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader>Your Plan</CustomHeader>
        <MainBody>
          <CleaningType />
        </MainBody>
      </ScrollView>
    </PrimaryBackground>
  );
};

export default HomeScreen;
