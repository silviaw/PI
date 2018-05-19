import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {Card, CardItem, Container, Content, Body} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class RulesPolicy extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Peraturan Lab TI',
        //headerLeft: (<Button title="Back" onPress={() => { this.props.navigation.goBack() }} />),
        headerLeft: (<Ionicons name='ios-arrow-back' size={30} style={{ paddingLeft: 12 }} onPress={() => navigation.goBack()} />),
        headerStyle: { backgroundColor: '#08AF9E' }
    });
  render() {
    return (
      <Container>
        <Content padder>
            <Card style={{marginBottom:10}}>
                <CardItem header   style={{borderBottomWidth:1}}>
                    <Text>
                      Hadir 15 menit sebelum praktikum berlangsung. Seluruh mahasiswa Gunadarma yang aktif tahun ini maka untuk seluruh mata Praktikum(SKS + Non SKS/Penunjang) diwajibkan untuk hadir mengikuti praktikum yang ada sesuai praktikum yang diambil jika TIDAK HADIR dianggap GAGAL dalam praktikum tersebut.  
                    </Text>
                </CardItem>
                <CardItem style={{marginTop:5, borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            1. Sopan dalam bertingkah laku dan bertutur kata
                        </Text>
                    </Body>
                </CardItem>
                <CardItem style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            2. Menjaga kebersihan dan ketertiban dilingkungan Lab TI
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            3. Sebelum masuk ke ruangan praktikum tas,jaket, topi harus di buka dan diletakkan di loker yang telah disediakan. Duduk ditempat yang telah ditentukan melalui jalan yang berada ditengah ruangan.
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            4. Tidak diperkenankan menggunakan perangkat music portable (Walkman,i-pod,walkmanphone,handphone,dll), makan,minum,dan merokok di lantai 4 dan di lantai 3
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            5. Dilarang meninggalkan praktikum tanpa seijin ketua asisten atau asisten
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            6. Kartu praktikum ditempel foto 2x3 formal di hekter di map praktikum
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            7.	MAP PLASTIK dibagi menjadi 3. Tingkat 1 & 2 berwarna putih (bening). Tingkat 3 berwarna hijau, dan tingkat 4 berwarna biru
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            8. Laporan akhir harus di print tanpa di jilid
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            9. Setiap praktikan bertanggung jawab atas komputer yang digunakannya. Tidak dibenarkan untuk berpindah tempat duduk dan berjalan jalan saat praktikum
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            10. Wajib mengerjakan test pendahuluan sebelum praktikum berlangsung
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            11. Menjaga peralatan praktikum Lab TI
                        </Text>
                    </Body>
                </CardItem>
                <CardItem   style={{borderBottomWidth:1}}>
                    <Body>
                        <Text>
                            12. Praktikan menghadiri 100% pertemuan atau praktikum memenuhi seluruh nilai ketika praktikum.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
