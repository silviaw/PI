import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Container, Content, Card, CardItem, Body, Button, Right, Left, Footer} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class DrawerContainer extends Component {
  render() {
      const {navigation} = this.props;
    return (
        <Container>
            <Content padder>
                <View style={{}}>
                    <View style={{ marginTop:30, marginBottom:5 }}>
                        <Image
                            source={require('../img/images.png')}
                            style={{ width: '100%', height: 150 }}
                            resizeMode="contain"
                        />
                        <Card style={{paddingLeft:5, paddingRight:5}}>
                            <CardItem>
                            <Body style={{justifyContent:'center', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                                <Text>Nama : Silvia W</Text>
                                <Text>Kelas : 3IA21</Text>
                                <Text>NPM : 56415572</Text>
                            </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{marginTop:25}}>
                        <Button style={{ width: '100%', backgroundColor:'#08AF9E'}} onPress={()=>navigation.navigate('Profile')}>
                            <View style={{margin:5}}>
                                <Ionicons name="md-person" size={32} />
                            </View>
                            <Left style={{margin:5}}>
                                <Text style={{fontSize:18}}>Profile</Text>
                            </Left>
                        </Button>
                        <Button style={{ width: '100%', backgroundColor: '#08AF9E', marginTop: 5 }} onPress={() => navigation.navigate('Policy')}>
                            <View style={{ margin: 5 }}>
                                <MaterialCommunityIcons name="information-variant" size={32} />
                            </View>
                            <Left style={{ margin: 5 }}>
                                <Text style={{ fontSize: 18 }}>Information</Text>
                            </Left>
                        </Button>
                        <Button style={{ width: '100%', backgroundColor: '#08AF9E', marginTop: 5 }} onPress={() => navigation.navigate('Bantuan')}>
                            <View style={{ margin: 5 }}>
                                <MaterialCommunityIcons name="help" size={32} />
                            </View>
                            <Left style={{ margin: 5 }}>
                                <Text style={{ fontSize: 18 }}>Help</Text>
                            </Left>
                        </Button>
                    </View>
            </View>
                
                
            </Content>
            <Footer style={{width:'100%',backgroundColor:'white', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                <Text>Laboratorium Teknik Informatika</Text>
                <Text>Universitas Gunadarma</Text>
                <Text>2018</Text>
            </Footer>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    uglyDrawerItem: {
        fontSize: 20,
        color: 'blue',
        padding: 15,
        margin: 5,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
});
