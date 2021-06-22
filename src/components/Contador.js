import React, { useState } from 'react'
import { Text, Button, StyleSheet } from 'react-native'

export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    return (
        <>
            <Text style={styles.text}>{numero}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
    text: {
        margin: 50,
        padding: 20
    }
  });