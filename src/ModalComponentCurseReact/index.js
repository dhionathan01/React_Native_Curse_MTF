import React, {Component} from 'react';
import { Button, View, Modal, Text, TouchableOpacity,StyleSheet, } from 'react-native';
export default class ModalComponentCurseReact extends Component{
  render() {
    return (
          <View style={{backgroundColor: 'gray', width: '100%', height: 350, borderRadius: 15,}}>
            <Text style={{paddingTop: 15, color: '#FFF', fontSize: 28, textAlign: 'center' }}>Seja Bem-vindo!</Text>
            <TouchableOpacity style={styles.btnClose} title='Sair' onPress={this.props.fechar}><Text>X</Text></TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    btnClose: {
        width: 20,
        height: 20,
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        position: 'absolute',
        top: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
})