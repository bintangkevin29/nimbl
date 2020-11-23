import React from 'react';
import {Image, StyleSheet} from 'react-native';

import CircleContainer from '../circle-container/CircleContainer';

import Check from '../../assets/images/check.svg';

interface CheckCircleProps {
  selected?: boolean;
}

const CheckCircle: React.FC<CheckCircleProps> = ({selected = false}) => {
  return (
    <CircleContainer style={checkCircleStyle.container} disabled={!selected}>
      {selected && <Check width="50%" />}
    </CircleContainer>
  );
};

const checkCircleStyle = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
});

export default CheckCircle;
