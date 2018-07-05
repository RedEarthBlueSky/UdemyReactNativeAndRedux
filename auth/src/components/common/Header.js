import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle, subSlug } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    <Text style={subSlug}>{props.slugText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
  subSlug: {
    fontSize: 12,
    paddingTop: 5,
  },
});

export default Header;
