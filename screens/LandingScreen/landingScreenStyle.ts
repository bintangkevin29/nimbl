import { GLOBAL_STYLE_VARIABLES } from './../../constants';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
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
    fontSize: 18,
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
    borderTopLeftRadius: 40,
    color: GLOBAL_STYLE_VARIABLES.primaryColor,
    fontSize: 15,
    paddingVertical: 28,
    paddingHorizontal: 55,
  },
});
