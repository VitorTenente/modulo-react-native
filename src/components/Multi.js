import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function () {
    return <Text>Comp Padrao</Text>
}

export function Component1() {
    return <Text>Componente 1</Text>
}

export function Component2() {
    return <Text style={style.text}>Componente 2</Text>
}

const style = StyleSheet.create({
    text : {
        fontSize: 40,
        color: 'white'
    }
})