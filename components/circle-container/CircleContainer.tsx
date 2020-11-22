import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';

interface CircleContainerProps {
  disabled?: boolean;
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  disabled,
  children,
}) => {
  return (
    <View
      style={[
        circleContainerStyle.container,
        disabled && circleContainerStyle.containerDisabled,
      ]}>
      {children}
    </View>
  );
};

const circleContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.secondaryColor,
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDisabled: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.greyColor,
    borderWidth: 1,
    borderColor: GLOBAL_STYLE_VARIABLES.darkerGreyColor,
  },
});

export default CircleContainer;
