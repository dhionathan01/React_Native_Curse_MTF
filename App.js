import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: ''
    };
    this.gravaNome = this.gravaNome.bind(this);
  }
  // ComponentDidMount - Quando o componente e montado na tela:
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({ nome: value });
    });
  }
  // ComponentDidUpdate - toda vez que um state pe atualizado fazer
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome;
    if (prevState.nome !== nome) { 
      await AsyncStorage.setItem('nome', nome);
    }
  }
  gravaNome() {
    this.setState({ nome: this.state.input });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({ input: text })}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.botao} onPress={this.gravaNome
          }>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    height: 40,
    marginLeft: 4,
  },
  nome: {
    fontSize: 30,
    marginTop: 15,
    textAlign: 'center'
  }
});