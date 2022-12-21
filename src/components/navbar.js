import React from 'react'
import { Appbar } from 'react-native-paper'

function Navbar({ navigation }) {
    return (
        <Appbar.Header>
            <Appbar.Content title="Chat App 2.0" />
            {/* 
                Button used to navigate back to the previos screen if it exists
            */}
            {
                navigation.canGoBack() && (
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                )
            }
        </Appbar.Header>
    )
}

export default Navbar