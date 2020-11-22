import React from 'react';
import {StyleProp, StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';

interface CustomButtonProps {
  title: string;
  style?: StyleProp<any>;
  selected?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  selected = false,
}) => {
  return (
    <View
      style={[
        customButtonStyle.container,
        !selected && customButtonStyle.containerDisabled,
        style,
      ]}>
      <Text
        style={[
          customButtonStyle.text,
          !selected && customButtonStyle.textDisabled,
        ]}>
        {title}
      </Text>
    </View>
  );
};

const customButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.secondaryColor,
    borderRadius: 5,
    paddingVertical: 17,
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.whiteColor,
    borderColor: GLOBAL_STYLE_VARIABLES.greyColor,
    borderWidth: 1.5,
  },
  text: {
    color: GLOBAL_STYLE_VARIABLES.whiteColor,
    fontFamily: 'ProductSans-Bold',
    fontSize: 13,
  },
  textDisabled: {
    color: GLOBAL_STYLE_VARIABLES.darkerGreyColor,
  },
});

export default CustomButton;
