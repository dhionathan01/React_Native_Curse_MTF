import React, {Component} from 'react';
import { Button, View, Modal, Text, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(visible) {
    this.setState({ modalVisible: true });
  }
  sair(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={() => this.entrar(true)}></Button>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor: '#292929', flex: 1}}>
            <Text style={{ color: '#FFF', fontSize: 28 }}>Seja Bem-vindo!</Text>
            <Button title='Sair' onPress={() => this.sair(false)}></Button>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
});