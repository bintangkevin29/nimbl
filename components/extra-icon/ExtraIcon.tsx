import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';
import Counter from '../counter/Counter';
import CustomTouchable from '../custom-touchable/CustomTouchable';

interface ExtraIconProps {
  count?: Number;
  imageSource: ImageSourcePropType;
  title: String;
  style?: StyleProp<ViewStyle>;
}

const ExtraIcon: React.FC<ExtraIconProps> = ({
  count = undefined,
  imageSource,
  title,
  style,
}) => {
  return (
    <CustomTouchable style={[extraIconStyle.container, style]}>
      <View style={extraIconStyle.iconContainer}>
        <Image
          style={extraIconStyle.image}
          resizeMode="contain"
          source={imageSource}
        />
        {count && <Counter style={extraIconStyle.count}>{count}</Counter>}
      </View>
      <Text style={extraIconStyle.iconText}>{title}</Text>
    </CustomTouchable>
  );
};

const extraIconStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.primaryColor,
    width: 76,
    height: 76,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 2.3,
  },
  count: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  iconText: {
    fontSize: 13,
    fontFamily: 'ProductSans-Regular',
  },
});

export default ExtraIcon;
