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
  entrar(){
    
    this.setState({
      nome: 'Dhionathan Jobim React Native State'
    })
  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title="Entrar" onPress={this.entrar}></Button>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}
export default App;