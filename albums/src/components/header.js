// import libraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//  Make a stateless component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
      <Text style={styles.subSlug}>{props.subSlug}</Text>
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
    paddingTop:5,
  },
});

//  Make component available to other parts of the app
export default Header;
