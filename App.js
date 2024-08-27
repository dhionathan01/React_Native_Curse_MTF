import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render() {
    let nome = 'Dhionathan Jobim';
    return (
      <View>
        <Text>Hello Word</Text>
        <Text>Meu primeiro APP</Text>
        <Text style={{ color: 'red', fontSize: 25 , margin: 15}}>
          Sujeito Programador
        </Text>
        <Text style={{ fontSize: 30 }}>{nome}</Text>
        <Jobs></Jobs>
      </View>
    );
  }
}
export default App;

class Jobs extends Component {
  render() { 
    let img = 'https://sujeitoprogramador.com/steve.png'
    return (
      <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300 }}
      ></Image>
    );
  }
}