import React from 'react'
import { View } from 'react-native'

function Base({ children }) {
    return (
        <View style={{ flex: 1, marginTop: 100 }}>
            {children}
        </View>
    )
}

export default Base