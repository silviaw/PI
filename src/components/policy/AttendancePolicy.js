import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {Card, CardItem, Container, Content, Body} from 'native-base';


export default class AttendancePolicy extends Component {
    static navigationOptions = ({navigation})=> ({
        title: 'Cara Ubah Password',
        headerStyle:{backgroundColor:'#08AF9E'}
    });
  render() {
    return (
      <Container>
        <Content padder>
            <Card>
                <CardItem header bordered>
                    <Text>
                        Kendala
                    </Text>
                </CardItem>
                <CardItem>
                    <Text> 1. Telat masuk praktikum</Text>
                    <Text></Text>
                </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
