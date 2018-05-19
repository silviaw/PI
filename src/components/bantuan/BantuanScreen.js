import React, {Component} from 'react';
import {View} from 'react-native';

import {
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class BantuanScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Bantuan',
    headerStyle: { backgroundColor: '#08AF9E' }
  })
  render () {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate ('Username')}
            >

              <Left>
                <Text>Username & Password</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate ('ChangePassword')}
            >
              <Left>
                <Text>Tata Cara Ubah Password</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate ('Reset')}
            >
              <Left>
                <Text>Tata Cara Lupa Password</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
            <CardItem 
                button
                onPress={() => this.props.navigation.navigate ('Wear')}
            >
              </CardItem>
            
          </Card>

        </Content>
      </Container>
    );
  }
}
