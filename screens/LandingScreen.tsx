import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../constants';
import PrimaryBackground from '../components/PrimaryBackground';

import Logo from '../assets/images/logo.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';

interface LandingScreenProps {
  navigation?: NavigationScreenProp<any, any>;
}

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  return (
    <PrimaryBackground hideStatusBar>
      <View style={style.container}>
        <View style={style.inner}>
          <View style={style.logoContainer}>
            <Logo width={100} />
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
              source={require('../assets/images/landing-image.png')}></Image>
          </View>
        </View>
        <View style={style.getStartedButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation?.navigate('Dead')}
            activeOpacity={0.9}>
            <Text style={style.getStartedButton}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PrimaryBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    height: '90%',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 35,
    flexDirection: 'row',
    textAlign: 'center',
    color: GLOBAL_STYLE_VARIABLES.whiteColor,
  },
  subTitle: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 17,
    flexDirection: 'row',
    textAlign: 'center',
    color: GLOBAL_STYLE_VARIABLES.whiteColor,
  },
  image: {
    alignSelf: 'center',
    height: undefined,
    width: '100%',
    aspectRatio: 1,
  },
  getStartedButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  getStartedButton: {
    fontFamily: 'ProductSans-Regular',
    backgroundColor: GLOBAL_STYLE_VARIABLES.whiteColor,
    borderTopLeftRadius: 25,
    color: GLOBAL_STYLE_VARIABLES.primaryColor,
    paddingVertical: 25,
    paddingHorizontal: 50,
  },
});

export default LandingScreen;
