import React, { useState, useEffect } from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from './navbar';
import Landing from '../screens/landing';
import Login from '../screens/login';
import Register from '../screens/register';
import Profile from '../screens/profile';

const Stack = createStackNavigator();

function NavManager({ theme }) {
    const [user, setUser] = useState(null)

    const auth = getAuth(app)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName="landing"
                screenOptions={{
                    header: (props) => <Navbar {...props} />,
                }}
            >
                {(
                    user ? (
                        <Stack.Screen name="profile" component={Profile} />
                    ) : (
                        <>
                            <Stack.Screen name="landing" component={Landing} />
                            <Stack.Screen name="login" component={Login} />
                            <Stack.Screen name="register" component={Register} />
                        </>
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavManager