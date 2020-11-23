import React from 'react';
import {View, Text, Image} from 'react-native';
import PrimaryBackground from '../../components/primary-background/PrimaryBackground';

import Logo from '../../assets/images/logo.svg';
import {style} from './landingScreenStyle';
import CustomTouchable from '../../components/custom-touchable/CustomTouchable';
import {useNavigation} from '@react-navigation/native';

const LandingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <PrimaryBackground hideStatusBar>
      <View style={style.container}>
        <View style={style.inner}>
          <View style={style.logoContainer}>
            <Logo width={91} />
          </View>
          <View>
            <Text style={style.title}>
              <Text>Clean Home {'\n'}</Text>
              <Text>Clean Life.</Text>
            </Text>
          </View>
          <View>
            <Text style={style.subTitle}>
              <Text>Book Cleaners at the Comfort {'\n'}</Text>
              <Text>of your home.</Text>
            </Text>
          </View>
          <View>
            <Image
              style={style.image}
              resizeMode="contain"
              source={require('../../assets/images/landing-image.png')}></Image>
          </View>
        </View>
        <View style={style.getStartedButtonContainer}>
          <CustomTouchable onPress={() => navigation?.pop()}>
            <Text style={style.getStartedButton}>Get Started</Text>
          </CustomTouchable>
        </View>
      </View>
    </PrimaryBackground>
  );
};
export default LandingScreen;
