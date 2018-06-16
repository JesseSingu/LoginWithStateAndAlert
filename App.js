import React, { Component } from 'react';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text, Title} from 'native-base'
import Next from './next';
import Alert from 'react-native'

export default class App extends Component {
  state = {
    heyman: true
  }
  render() {
    return (
      <Container>
          <Header>
            <Title>Hey</Title>
          </Header>
        <Content>
          <Form>
          {this.state.heyman ? (
            <Content>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            
              <Button full onPress={()=>{
                this.setState({heyman: false});
                alert('hello')
              }}>
                <Text>Sign in</Text>
              </Button>
            </Content>
            ) : (
              <Content>
                <Next /> 
              </Content>
          )}
          </Form>
        </Content>
      </Container>
    );
  }
}
