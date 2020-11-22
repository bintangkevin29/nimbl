import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';

const CustomHeader: React.FC = ({children}) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 27,
  },
  text: {
    color: GLOBAL_STYLE_VARIABLES.whiteColor,
    fontSize: 18,
    fontFamily: 'ProductSans-Bold',
  },
});

export default CustomHeader;
