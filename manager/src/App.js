import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import reducers from  './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRwM8VpxySebsmVE2RruzUNkyYieWv0to',
      authDomain: 'manage-2a688.firebaseapp.com',
      databaseURL: 'https://manage-2a688.firebaseio.com',
      projectId: 'manage-2a688',
      storageBucket: 'manage-2a688.appspot.com',
      messagingSenderId: '530339224168'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // second argument is for any initial state that we want to pass to our redux app
    // optional, server side renderring
    // third argument => store enhancer, adding additional func to the store
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
