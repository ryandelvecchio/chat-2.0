import React, { useState } from 'react'
import { Button, Surface, Text, TextInput } from 'react-native-paper'
import Base from '../layouts/base'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth(app)

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Base>
            {/* Login form */}
            <Surface style={{ padding: 20, margin: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{ marginBottom: 10 }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={{ marginBottom: 10 }}
                />

                {/* Error message */}
                <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>

                <Button
                    mode="contained"
                    onPress={() => handleLogin()}
                    style={{ marginBottom: 10 }}
                >
                    Login
                </Button>
            </Surface>
        </Base>
    )
}

export default Login