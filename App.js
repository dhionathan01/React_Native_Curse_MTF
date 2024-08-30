import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoas from './src/Pessoas'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {id: 1, nome: 'Dhionathan Jobim', idade: 23, email: 'dhionathan.lanzoni@rpconsultoria.com.br'},
        {id: 2, nome: 'Ana Silva', idade: 25, email: 'ana.silva@exemplo.com'},
        {id: 3, nome: 'Carlos Pereira', idade: 28, email: 'carlos.pereira@exemplo.com'},
        {id: 4, nome: 'Beatriz Souza', idade: 22, email: 'beatriz.souza@exemplo.com'},
        {id: 5, nome: 'João Oliveira', idade: 30, email: 'joao.oliveira@exemplo.com'},
        {id: 6, nome: 'Mariana Costa', idade: 27, email: 'mariana.costa@exemplo.com'},
        {id: 7, nome: 'Lucas Santos', idade: 26, email: 'lucas.santos@exemplo.com'},
        {id: 8, nome: 'Gabriel Lima', idade: 24, email: 'gabriel.lima@exemplo.com'},
        {id: 9, nome: 'Juliana Almeida', idade: 29, email: 'juliana.almeida@exemplo.com'},
        {id: 10, nome: 'Felipe Rodrigues', idade: 31, email: 'felipe.rodrigues@exemplo.com'},
        {id: 11, nome: 'Paula Ferreira', idade: 23, email: 'paula.ferreira@exemplo.com'},
        {id: 12, nome: 'Ricardo Sousa', idade: 32, email: 'ricardo.sousa@exemplo.com'},
        {id: 13, nome: 'Patrícia Gomes', idade: 28, email: 'patricia.gomes@exemplo.com'},
        {id: 14, nome: 'Bruno Dias', idade: 27, email: 'bruno.dias@exemplo.com'},
        {id: 15, nome: 'Aline Rocha', idade: 25, email: 'aline.rocha@exemplo.com'},
        {id: 16, nome: 'Eduardo Martins', idade: 29, email: 'eduardo.martins@exemplo.com'},
        {id: 17, nome: 'Fernanda Lima', idade: 30, email: 'fernanda.lima@exemplo.com'},
        {id: 18, nome: 'Vinícius Nunes', idade: 24, email: 'vinicius.nunes@exemplo.com'},
        {id: 19, nome: 'Camila Ribeiro', idade: 26, email: 'camila.ribeiro@exemplo.com'},
        {id: 20, nome: 'Thiago Moreira', idade: 28, email: 'thiago.moreira@exemplo.com'},
        {id: 21, nome: 'Larissa Carvalho', idade: 25, email: 'larissa.carvalho@exemplo.com'},
        {id: 22, nome: 'Pedro Albuquerque', idade: 29, email: 'pedro.albuquerque@exemplo.com'},
        {id: 23, nome: 'Rafael Barros', idade: 31, email: 'rafael.barros@exemplo.com'},
        {id: 24, nome: 'Sofia Teixeira', idade: 23, email: 'sofia.teixeira@exemplo.com'},
        {id: 25, nome: 'Mateus Neves', idade: 27, email: 'mateus.neves@exemplo.com'},
        {id: 26, nome: 'Isabela Mendes', idade: 30, email: 'isabela.mendes@exemplo.com'}
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoas data={item}></Pessoas>}
        ></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
export default App;
