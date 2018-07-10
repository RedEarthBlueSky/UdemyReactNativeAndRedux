import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from '../styles';

const Header = (props) => {
  const { viewStyle, textStyle, subSlug } = headerStyles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text style={subSlug}>{props.slugText}</Text>
    </View>
  );
};

export { Header };
