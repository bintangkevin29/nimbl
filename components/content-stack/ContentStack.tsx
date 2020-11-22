import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

interface ContentStackProps extends ViewProps {
  title: string;
}

const ContentStack: React.FC<ContentStackProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <View style={[style.container, props?.style]} {...props}>
      <Text style={style.title}>{title}</Text>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 33,
  },
  title: {
    fontSize: 15,
    fontFamily: 'ProductSans-Bold',
    marginBottom: 33,
  },
});

export default ContentStack;
