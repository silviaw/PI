import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button
} from 'native-base';

export default class componentName extends Component {
  render() {
    return (
      <Container >
        <Content padder>
          <Form style={{marginTop:10}}>
            <Item disabled>
              <Input disabled placeholder='Prak-52415893'/>
              <Icon name="information-circle" />
            </Item>
            <Item floatingLabel>
              <Label>Password Lama</Label>
              <Input/>
            </Item>
            <Item floatingLabel>
              <Label>Password Baru</Label>
              <Input/>
            </Item>
            <Item floatingLabel>
              <Label>Konfirmasi Password</Label>
              <Input/>
            </Item>
            <View style={{marginTop:25}}>
            <Button block>
              <Text>Change Password</Text>
            </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
