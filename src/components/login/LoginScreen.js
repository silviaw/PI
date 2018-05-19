import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Thumbnail,
    Button,
    Footer
} from 'native-base';
import {StyleSheet, Image, Text, View, KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class LoginScreen extends Component{
    render(){
        return(
                <KeyboardAvoidingView style={{width:'100%', height:'100%', backgroundColor:'white'}} behavior="padding" enabled>
                    <Content style={{marginTop:50}}>
                        <Image source={require('../../img/logo.jpg')} style={{width:'100%', height:250}} resizeMode='contain'/>
                        <Form style={{marginTop:40}}>
                            <Item floatingLabel style={{marginLeft:20, marginRight:40}}>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel style={{marginLeft:20, marginRight:40}}>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <View style={{alignSelf:'center', flex:1, flexDirection:'row', marginBottom:15}}>
                                <Button 
                                onPress = {()=> this.props.navigation.navigate('Profile')}
                                style={{marginTop:50, height:50, width:100, justifyContent:'center', marginRight:10, backgroundColor:'#08AF9E'}}>
                                    <Text style={{color:'white'}}>Login</Text>
                                </Button>
                            </View>
                        </Form>
                    </Content>
                </KeyboardAvoidingView>
        );
    }
}