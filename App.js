import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Navigation from './src/navigations/Navigation';
//import DemoStack from './src/navigations/Navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});