// Index.android.js - place code here for Android!!!!

// Import a library to help create a componenet
import React from 'react';
import { AppRegistry, View } from 'react-native'; // npm installed module
import Header from './src/components/Header'; // specific path because it's our own file, the '.js' may not be written
import AlbumList from './src/components/AlbumList';

// Create a component

/*  <Text>Some Text</Text> // this is not HTML, this is JS dialect, JSX */

const App = () => (
  // cant do <AlbumList /> -> its like return 1 and return 2, must use View tag
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!!!'} />
    <AlbumList />
  </View>
);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
