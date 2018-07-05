import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header
          headerText='Authorisation, Baby yeah!'
          slugText='You know you like it!'
        />
      <Text>YEAH!</Text>
      </View>
    );
  }
}

export default App;
