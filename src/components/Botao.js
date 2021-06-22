import React from 'react'
import {Button} from 'react-native'


export default props => {
    function cadastrar() {
        console.warn('cadastrou')
    }

    return (
        <Button
            title='Cadastrar'
            onPress={cadastrar}
        />
    )
}