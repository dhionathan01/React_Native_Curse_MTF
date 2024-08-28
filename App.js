import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

class App extends Component{
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor: '#555'}}>
        <View style={{ width: 50, height: 50, backgroundColor: '#222' }}></View>
        <View style={{flex:1,  backgroundColor: '#FFF' }}></View>
        <View style={{height: 65,  backgroundColor: '#222' }}></View>
      </View>
    );
  }
}
export default App;