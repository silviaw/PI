import React, { Component } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import {
    Card,
    CardItem,
    Container,
    Content,
    Body,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class WearPolicy extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Peraturan Berpakaian',
        //headerLeft: (<Button title="Back" onPress={() => { this.props.navigation.goBack() }} />),
        headerLeft: (<Ionicons name='ios-arrow-back' size={30} style={{ paddingLeft: 12 }} onPress={() => navigation.goBack()} />),
        headerStyle: { backgroundColor: '#08AF9E' }
    });
  render() {
    return (
      <Container>
        <Content padder>
           <Card>
            <CardItem header style={{borderBottomWidth:1}}>
                <Body>
                    <Text>
                        Wanita
                    </Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                <Text>1. Tidak transparan</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>2. Tidak ketat</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>3. Kancing ditutup hingga kancing kedua</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>4. Tidak menggunakan manset</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>5. Kemeja bukan berbahan jeans</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>6. Untuk lengan kemeja pendek harus 1 telapak tangan dari siku</Text>
                </Body>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Body>
                    <Text>7. Rok pada saat duduk berada dibawah lutut</Text>
                </Body>
            </CardItem>
           </Card>
            

           <Card>
            <CardItem header style={{borderBottomWidth:1}}>
                    <Text> Pria </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    1. Kemeja tidak boleh bermotif border
                </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    2. Tidak menggunakan kemeja flannel atau bermotif jeans
                </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    3. Celana bukan berbahan kodorai / celana kargo
                </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    4. Baju dimasukan kedalam celana
                </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    5. Rambut haruslah rapi
                </Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1}}>
                <Text>
                    6. Bagi praktikan yang berambut panjang harus mengikat rambutnya
                </Text>
            </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
