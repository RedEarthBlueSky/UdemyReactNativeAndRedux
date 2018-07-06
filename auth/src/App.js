import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from 'firebase';

import { Header } from './components/common';
import config from './components/config';


class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    Firebase.initializeApp(config);
  }

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
