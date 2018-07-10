import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

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

        <CardSection>
          <Button>
            Login!
          </Button>
        </CardSection>
     </Card>
    );
  }
}

export default LoginForm;
