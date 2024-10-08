import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Pessoas extends Component {
    render() {
      return (
        <View horizontal={true} style={styles.areaPessoa}>
          <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
          <Text style={styles.textoPessoa}>Idade:{this.props.data.idade}</Text>
          <Text style={styles.textoPessoa}>Email:{this.props.data.email}</Text>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 300,
        marginBottom: 15
      },
      textoPessoa: {
        color: '#fff',
        fontSize: 20,
      }
})
  
export default Pessoas;