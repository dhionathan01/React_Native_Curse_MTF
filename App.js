import React, {Component} from 'react';
import { Button, View, Modal, Text, StyleSheet, FlatList, } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes'
export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    };
  }
  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data
    });
    console.log(response)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Filmes data={item} /> } ></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});