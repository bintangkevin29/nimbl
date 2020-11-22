import React from 'react';
import {TouchableOpacityComponent, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomTouchable: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
