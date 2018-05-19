import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Label,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Title,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class ProfileScreen extends Component {
  static navigationOptions = ({navigation})=> ({
    title: 'Profile',
    headerStyle:{backgroundColor:'#08AF9E'}
  });

  render() {
    return (
      <Container>
        <Content padder>
          <View style={{marginTop:30}}>
            <Image
              source={require ('../../img/images.png')}
              style={{width: '100%', height: 250}}
              resizeMode="contain"
            />
          </View>
          
          <Card style={{marginTop:15}}>
            <CardItem transparent style={{}}>
              <Body style={{justifyContent:'center', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                <Text> Nama : Silvia W</Text>
                <Text> NPM : 56415572 </Text>
                <Text> Kelas : 3IA21 </Text>
              </Body>
            </CardItem>
          </Card>
        
          <Card style={{marginTop:15}}>
            <CardItem header bordered style={{justifyContent:'center', backgroundColor:'#08AF9E', borderWidth:0.5, borderColor:'gray'}}>
              <Text style={{color:'black'}}> Daftar Praktikum</Text>
            </CardItem>
            <Card>
              <CardItem>
                <Left>
                  <Text>
                    Algoritma Pemrograman 1
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem 
                button
                onPress={()=>this.props.navigation.navigate('Nilai')}
              >
                <Left>
                  <Text>
                    Algoritma Pemrograman 2A
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem button>
                <Left>
                  <Text>
                    Algoritma Pemrograman 2B
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem button>
                <Left>
                  <Text>
                    KTI
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem button>
                <Left>
                  <Text>
                    Daspro 1
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem button>
                <Left>
                  <Text>
                    Daspro 2
                  </Text>
                </Left>
                <Right>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} />
                </Right>
              </CardItem>
              <CardItem
                footer
                bordered
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
            </Card>
            

          </Card>
        </Content>
      </Container>
    );
  }
}
