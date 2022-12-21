import React, { useState, useEffect } from 'react'
import { Appbar } from 'react-native-paper'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase'

function Navbar({ navigation }) {
    const [user, setUser] = useState(null)

    const routes = navigation.getState().routes
    const currRoute = routes[routes.length - 1]
    const prevRoute = routes[routes.length - 2]

    const auth = getAuth(app)

    function handleLogout() {
        auth.signOut()
            .then(() => {
                navigation.navigate('login')
            }
            )
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                if (currRoute.name === 'login' || currRoute.name === 'register') {
                    navigation.navigate('profile')
                }
            } else {
                setUser(null)
            }
        })
    }, [])

    return (
        <Appbar.Header>
            <Appbar.Content title="Chat App 2.0" />
            {/* Show the logout button if the user is logged in */}
            {user && <Appbar.Action icon="logout" onPress={() => handleLogout()} />}
            {/* 
                Button used to navigate back to the previos screen if it exists

                Do not show the button if the user just registered or logged in
            */}
            {
                navigation.canGoBack() && (prevRoute.name !== 'login' && prevRoute.name !== 'register') && (
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                )
            }
        </Appbar.Header>
    )
}

export default Navbar