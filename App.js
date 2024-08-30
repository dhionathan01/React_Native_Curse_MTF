import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, Alert, ScrollView } from 'react-native';

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box1}></View>
          <View style={styles.box3}></View>
          <View style={styles.box1}></View>
          <View style={styles.box4}></View>
          <View style={styles.box1}></View>
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
          <View style={styles.box3}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box1}></View>
          <View style={styles.box3}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box1}></View>
          <View style={styles.box4}></View>
          <View style={styles.box1}></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  box1: {
    backgroundColor: 'red',
    height: 350,
    width: 150,
  },
  box2: {
    backgroundColor: 'green',
    height: 350,
    width: 150,

  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150,

  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    width: 150,

  }
});
export default App;