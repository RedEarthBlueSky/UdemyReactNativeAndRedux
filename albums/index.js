import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header
      headerText={'Welcome to Albums'}
      subSlug={'We hope you find something you like'}
    />
  <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
