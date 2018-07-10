import React from 'react';
import { View } from 'react-native';
import { styleSheet } from '../styles';

const Card = (props) => {
  const { cardContainer } = styleSheet;

  return (
    <View style={cardContainer}>
      {props.children}
    </View>
  );
};

export { Card };
