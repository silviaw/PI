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

export default class ChangePolicy extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Petunjuk Ubah Password',
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
              <Text>Petunjuk Ubah Password</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Ubahlah password secara berkala demi keamanan akun anda. Ingat kembali password yang telah anda ubah.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
