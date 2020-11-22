import React from 'react';
import {View, Text, Image} from 'react-native';
import PrimaryBackground from '../../components/primary-background/PrimaryBackground';

import Logo from '../../assets/images/logo.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import {style} from './landingScreenStyle';

interface LandingScreenProps {
  navigation?: NavigationScreenProp<any, any>;
}

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
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
          <TouchableOpacity
            onPress={() => navigation?.navigate('Home')}
            activeOpacity={0.9}>
            <Text style={style.getStartedButton}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PrimaryBackground>
  );
};
export default LandingScreen;
