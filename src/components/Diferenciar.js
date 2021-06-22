import React from 'react'
import { Text, Platform } from 'react-native'

export default props => {
    if (Platform.os == 'android') {
        return <Text>Android</Text>
    } else if (Platform.os == 'ios') {
        <Text>iOS</Text>
    } else {
        return <Text>Em que mundo voce vive???????</Text>
    }
}