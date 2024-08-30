import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component{
  constructor(props) { 
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: 'Calabresa', valor: 59.90 },
        { key: 2, nome: 'Brigadeiro', valor: 47.90 },
        { key: 3, nome: 'Strogonoff', valor: 39.90 },
        { key: 11, nome: 'Margherita', valor: 57.90 },
        { key: 12, nome: 'Quattro Formaggi', valor: 68.90 },
        { key: 13, nome: 'Prosciutto e Funghi', valor: 78.90 },
        { key: 15, nome: 'Portuguesa', valor: 58.90 },

      ]
    }
  }
  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, ItemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>Você escolheu: { this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: { this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
        <Text style={{fontSize: 30}}>{ this.state.pizza}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center'
  }
});