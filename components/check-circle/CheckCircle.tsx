import React from 'react';
import {Image} from 'react-native';

import CircleContainer from '../circle-container/CircleContainer';

import Check from '../../assets/images/check.svg';

interface CheckCircleProps {
  selected?: boolean;
}

const CheckCircle: React.FC<CheckCircleProps> = ({selected = false}) => {
  return (
    <CircleContainer disabled={!selected}>
      {selected && <Check width="50%" />}
    </CircleContainer>
  );
};

export default CheckCircle;
