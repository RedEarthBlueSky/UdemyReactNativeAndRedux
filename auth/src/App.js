import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import firebaseConfig from './components/config/firebaseConfig';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
      firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header
          headerText='Authorisation, Baby yeah!'
          slugText='You know you like it!'
        />
      <LoginForm />
      </View>
    );
  }
}

export default App;
