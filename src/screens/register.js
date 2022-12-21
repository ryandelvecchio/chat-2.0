import React, { useState } from 'react'
import { Text, Surface, TextInput, Button } from 'react-native-paper'
import Base from '../layouts/base'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = getAuth(app)

    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError('')
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }

    return (
        <Base>
            {/* Register form */}
            <Surface style={{ padding: 20, margin: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Register</Text>
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
                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry
                    style={{ marginBottom: 10 }}
                />

                {/* Error message */}
                <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>

                <Button
                    mode="contained"
                    onPress={() => handleRegister()}
                    style={{ marginBottom: 10 }}
                    loading={loading}
                >
                    Register
                </Button>
            </Surface>
        </Base>
    )
}

export default Register