import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
export default class App extends Component {
  constructor(props) {

    super(props);


    this.state = {

  Username:'',
  Password:'',
    };
  }

  onLogin() {
    let { Username, Password } = this.state;
    alert( `${Username}  ${Password}`)
  }

  render() {
    
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder={'Username'} editable={true} onChangeText={(Username)=> this.setState({Username})} value={this.state.Username}/>
            </Item>
            <Item last>
              <Input placeholder={"Password"} editable={true} onChangeText={(Password)=> this.setState({Password})} value={this.state.Password} secureTextEntry= {true}/>
            </Item>
             <Button full onPress={this.onLogin.bind(this)}>
            <Text>Click Me! </Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}