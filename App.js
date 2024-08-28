import React, {Component} from 'react';
import { View, Text, Image, Button } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Dhionathan Jobim'
    }
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title="Entrar" onPress={() => this.entrar('Dhionathan React Call')}></Button>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}
export default App;