import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

class App extends Component{
  render() {
    return (
      /* flexDirection: row */
      /* alignItems : Define na vertical .  altura  eixo y*/
      /* justifyContent : Define na horizontal .  largura eixo x */
      /* flexDirection: column */
      /* alignItems : Define na horizontal .  largura  eixo x */
      /* justifyContent : Define na vertical .  altura eixo y */


      <View style={{ flex: 1 , flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: '#555'}}>
        <View style={{width: 50,  height: 50, backgroundColor: 'green' }}></View>
        <View style={{width: 50,  height: 50, backgroundColor: 'red' }}></View>
        <View style={{width: 50,  height: 50, backgroundColor: 'yellow' }}></View>
      </View>
    );
  }
}
export default App;