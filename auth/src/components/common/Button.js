import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles';

const Button = (props) => {
  const { buttonStyle, textStyle } = buttonStyles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
