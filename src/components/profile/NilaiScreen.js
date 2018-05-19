import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {
    Content,
    Container,
    Card,
    CardItem,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class componentName extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Nilai AP2',
        //headerLeft: (<Button title="Back" onPress={() => { this.props.navigation.goBack() }} />),
        headerLeft: (<Ionicons name='ios-arrow-back' size={30} style={{ paddingLeft: 12 }} onPress={() => navigation.goBack()} />),
        headerStyle: { backgroundColor: '#08AF9E' }
    });
  render() {
    return (
      <Container>
        <Content padder>
            <View style={{flex:1, marginTop:5, marginBottom:10}}>
                <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                    <Text> Nama Praktikum : Algoritma Pemrograman 1</Text>
                    <Text> Kelas Praktikum : 1IA23 </Text>
                    <Text> Penanggung Jawab : Gilang Aditya R</Text>
                </View>
            </View>
            <Card transparent>
                <CardItem header style={{borderBottomWidth:0.5}}>
                    <Text>Pertemuan 1</Text>
                </CardItem>
                <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
                    <Text>Nilai Tugas Pendahuluan : 27</Text>
                    <Text>Nilai Laporan Pendahuluan : 27</Text>
                    <Text>Nilai Nilai Laporan Akhir : 27</Text>
                    <Text>Nilai Keaktifan : 27</Text>
                </CardItem>
                <CardItem footer style={{borderTopWidth:0.5}}>
                    <Text>Total : 90</Text>
                </CardItem>
            </Card>
            <Card transparent>
                <CardItem header style={{borderBottomWidth: 0.5}}>
                    <Text>Pertemuan 2</Text>
                </CardItem>
                <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text>Nilai Tugas Pendahuluan : 27</Text>
                    <Text>Nilai Laporan Pendahuluan : 27</Text>
                    <Text>Nilai Nilai Laporan Akhir : 27</Text>
                    <Text>Nilai Keaktifan : 27</Text>
                </CardItem>
                <CardItem footer style={{borderTopWidth: 0.5}}>
                    <Text>Total : 90</Text>
                </CardItem>
            </Card>
        <Card transparent>
            <CardItem header style={{borderBottomWidth: 0.5}}>
                <Text>Pertemuan 3</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <Text>Nilai Tugas Pendahuluan : 27</Text>
                <Text>Nilai Laporan Pendahuluan : 27</Text>
                <Text>Nilai Nilai Laporan Akhir : 27</Text>
                <Text>Nilai Keaktifan : 27</Text>
            </CardItem>
            <CardItem footer style={{borderTopWidth: 0.5}}>
                <Text>Total : 90</Text>
            </CardItem>
        </Card>
        <Card transparent>
            <CardItem header style={{borderBottomWidth: 0.5}}>
                <Text>Pertemuan 4</Text>
            </CardItem>
            <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <Text>Nilai Tugas Pendahuluan : 27</Text>
                <Text>Nilai Laporan Pendahuluan : 27</Text>
                <Text>Nilai Nilai Laporan Akhir : 27</Text>
                <Text>Nilai Keaktifan : 27</Text>
            </CardItem>
            <CardItem footer style={{borderTopWidth: 0.5}}>
                <Text>Total : 90</Text>
            </CardItem>
        </Card>



        </Content>
      </Container>
    );
  }
}
