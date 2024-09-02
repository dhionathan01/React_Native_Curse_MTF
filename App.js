import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});