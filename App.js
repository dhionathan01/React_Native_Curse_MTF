import Slider  from '@react-native-community/slider';
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      valor: 50
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
          minimumTrackTintColor='#00FF00'
          maximumTrackTintColor='#FF0000'
        ></Slider>
        <Text>{this.state.valor.toFixed(1) }</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});