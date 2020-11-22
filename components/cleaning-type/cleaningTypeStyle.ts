import {StyleSheet} from 'react-native';

export const cleaningTypeStyle = StyleSheet.create({
  cleaningTypeContainer: {
    flexDirection: 'row',
    marginHorizontal: -7,
  },
  cleaningType: {
    flex: 1,
    paddingHorizontal: 7,
    marginTop: -20,
    alignItems: 'center',
  },
  cleaningTypeImage: {
    alignSelf: 'center',
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    marginBottom: 4,
  },
  cleaningTypeText: {
    fontSize: 13,
    fontFamily: 'ProductSans-Bold',
    marginBottom: 11.5,
  },
  selectionTouchable: {
    alignItems: 'center',
  },
});
