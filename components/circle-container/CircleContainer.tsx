import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';

interface CircleContainerProps extends ViewProps {
  disabled?: boolean;
  larger?: boolean;
  style?: StyleProp<any>;
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  disabled,
  children,
  larger = false,
  style,
}) => {
  return (
    <View
      style={[
        circleContainerStyle.container,
        disabled && circleContainerStyle.containerDisabled,
        larger && circleContainerStyle.containerLarger,
        style,
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
  containerLarger: {
    width: 26,
    height: 26,
  },
});

export default CircleContainer;
