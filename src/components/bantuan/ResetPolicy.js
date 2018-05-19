import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Content,
  Container,
  Card,
  CardItem,
  Body,
  Left,
  Right,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class ResetPolicy extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Petunjuk Lupa Password',
    //headerLeft: (<Button title="Back" onPress={() => { this.props.navigation.goBack() }} />),
    headerLeft: (<Ionicons name='ios-arrow-back' size={30} style={{ paddingLeft: 12 }} onPress={() => navigation.goBack()} />),
    headerStyle: { backgroundColor: '#08AF9E' }
  });
  render () {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header style={{borderBottomWidth: 0.5}}>
              <Text>Petunjuk Lupa Password</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Apabila anda mengalami lupa password silahkan datang ke staff. Setelah di berikan password yang baru, harap di ingat, jangan dilupakan kembali. Lupakan lah mantanmu, jangan passwordmu.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
