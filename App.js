
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// import CompPadrao, {Component1, Component2} from './src/components/Multi.js'
// import MinMax from './src/components/MinMax'
// import Titulo from './src/components/Titulo'
// import Contador from './src/components/Contador'
// import Pai from './src/components/indireta/Pai'
// import Diferenciar from './src/components/Diferenciar'
// import Membro from './src/components/Membro';
// import Familia from './src/components/Familia';
// import ListaProdutos from './src/components/Produtos/ListaProdutos';
import ListaProdutos2 from './src/components/Produtos/ListaProdutos2'
import DigiteSeuNome from './src/components/DigiteSeuNome';

export default () => {
  return (
    <>
      {/* <ListaProdutos2/> */}
      <DigiteSeuNome/>
    </>
  )}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 20
  },
  text: {
    color: '#FFFAFA'
  }
});
  