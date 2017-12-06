import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  // null not false, not know whether you're logged in or not

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDJKw7dnzuhwEo7MUCup2ibLNsNXlamsn0',
      authDomain: 'authentication-dcadb.firebaseapp.com',
      databaseURL: 'https://authentication-dcadb.firebaseio.com',
      projectId: 'authentication-dcadb',
      storageBucket: 'authentication-dcadb.appspot.com',
      messagingSenderId: '82702110307'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default: //when it's null
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    flexDirection: 'row',
  },
  spinnerStyle: {
    paddingTop: 200
  }
};

export default App;
