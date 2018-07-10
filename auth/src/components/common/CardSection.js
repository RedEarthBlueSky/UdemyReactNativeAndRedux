import React from 'react';
import { View } from 'react-native';

import { styleSheet } from '../styles';

const CardSection = (props) => {
  const { sectionContainer } = styleSheet;

  return (
    <View style={sectionContainer}>
      {props.children}
    </View>
  );
};

export { CardSection };
