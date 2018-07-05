import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header
          headerText='The Auth App, Baby yeah!'
          slugText='You know you like it'
        />
        <Text>The auth app, baby!</Text>
      </View>
    );
  }
}

export default App;
