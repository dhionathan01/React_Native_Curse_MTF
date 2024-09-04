import React, {Component} from 'react';
import { Button, View, Modal, Text, StyleSheet, } from 'react-native';
export default class ModalComponentCurseReact extends Component{
  render() {
    return (
          <View style={{backgroundColor: '#292929', width: '100%', height: 350}}>
            <Text style={{ color: '#FFF', fontSize: 28 }}>Seja Bem-vindo!</Text>
            <Button title='Sair' onPress={this.props.fechar}></Button>
          </View>
    );
  }
}
