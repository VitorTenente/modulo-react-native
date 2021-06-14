import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Primeiro from './src/components/Primeiro';
import CompPadrao, {Component1, Component2} from './src/components/Multi.js'

// export default () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>primeiro exercicio react native</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <Primeiro/>
//   )
  
// }

export default () => {
  return ([
    <View style={styles.container}>
      <CompPadrao></CompPadrao>
    </View>,

    <View style={styles.container}>
      <Component1></Component1>
    </View>,
    
    <View style={styles.container}>
      <Component2></Component2>
    </View>]
  )
}




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
  