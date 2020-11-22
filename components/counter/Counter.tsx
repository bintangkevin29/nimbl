import React from 'react';
import {StyleProp, StyleSheet, Text} from 'react-native';
import {GLOBAL_STYLE_VARIABLES} from '../../constants';
import CircleContainer from '../circle-container/CircleContainer';

interface CounterProps {
  style?: StyleProp<any>;
}

const Counter: React.FC<CounterProps> = ({children, style}) => {
  return (
    <CircleContainer style={style} larger>
      <Text style={counterStyle.text}>{children}</Text>
    </CircleContainer>
  );
};

const counterStyle = StyleSheet.create({
  text: {
    color: GLOBAL_STYLE_VARIABLES.whiteColor,
    fontSize: 13,
    fontFamily: 'ProductSans-Bold',
  },
});

export default Counter;
