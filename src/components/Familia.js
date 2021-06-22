import React from 'react'
import { Text } from 'react-native'


export default props => {
    return(
        <>
            <Text>[Inicio] membros da familia:</Text>
            {props.children}
            <Text>[Fim] membros da familia:</Text>
        </>
    )
}