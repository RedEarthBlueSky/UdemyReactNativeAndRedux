import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        console.log('Login Failed: Create new user');
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            console.log('New user creation failed');
            this.setState({ error: 'Authentication Failed.', loading: false });
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In!
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email:'
            onChangeText={email => this.setState({ email })}
            placeholder='me@myDomain.com'
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password:'
            onChangeText={password => this.setState({ password })}
            placeholder='My secret word'
            secureTextEntry
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.errorText}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
     </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;
