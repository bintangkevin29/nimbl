import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';

const MainBody: React.FC = ({children}) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL_STYLE_VARIABLES.whiteColor,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    paddingHorizontal: 38,
    paddingVertical: 35,
  },
});

export default MainBody;
