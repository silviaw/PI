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

export default class PolicyScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Information',
    headerStyle: { backgroundColor: '#08AF9E' }
  })
  render () {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate ('Wear')}
            >
             
              <Left>
                <Text>Tata tertib berpakaian</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
            <CardItem 
                button
                onPress={()=>this.props.navigation.navigate('Rules')}
            >
              <Left>
                <Text>Peraturan Lab TI</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
            <CardItem button>
              <Left>
                <Text>Author</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-dropright-outline" size={32} />
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
