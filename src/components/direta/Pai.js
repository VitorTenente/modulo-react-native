import React from 'react'
import {} from 'reactive-native'
import Filho from './Filho'

export default props => {
    let x = 13
    let y = 100
    return (
        <>
            <Filho a={x} b={b}/>
            <Filho a={x + 100} b={y + 200} />
        </>
    )
}