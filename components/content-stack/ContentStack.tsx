import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ContentStackProps {
  title: string;
}

const ContentStack: React.FC<ContentStackProps> = ({title, children}) => {
  return (
    <View style={style.container}>
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
