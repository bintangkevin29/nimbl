import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../constants';

interface PrimaryBackgroundProps {
  hideStatusBar?: boolean;
}

const PrimaryBackground: React.FC<PrimaryBackgroundProps> = ({
  children,
  hideStatusBar = false,
}) => {
  return (
    <View style={style.container}>
      <StatusBar
        hidden={hideStatusBar}
        barStyle="light-content"
        backgroundColor={GLOBAL_STYLE_VARIABLES.primaryDarkerColor}
      />
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLE_VARIABLES.primaryColor,
    flex: 1,
  },
});

export default PrimaryBackground;
