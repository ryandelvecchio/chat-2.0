import React, { useState, useEffect } from 'react'
import { Surface, Text } from 'react-native-paper'
import Base from '../layouts/base'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase'

function Profile() {
    const [user, setUser] = useState(null)

    const auth = getAuth(app)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return (
        <Base>
            <Surface style={{ padding: 20, margin: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Profile</Text>
                {user && (
                    <>
                        <Text style={{ marginBottom: 10 }}>Email: {user.email}</Text>
                        <Text style={{ marginBottom: 10 }}>UID: {user.uid}</Text>
                    </>
                )}
            </Surface>
        </Base>
    )
}

export default Profile