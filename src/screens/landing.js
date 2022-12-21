import React from 'react'
import { Button, Surface, Text } from 'react-native-paper'
import Base from '../layouts/base'

export default function Landing({ navigation }) {
	return (
		<Base>
			<Surface style={{ padding: 20, margin: 20 }}>
				<Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to Chat App 2.0</Text>
				<Button
					mode="contained"
					onPress={() => navigation.navigate('login')}
					style={{ marginBottom: 10 }}
				>
					Login
				</Button>

				<Button
					mode="contained"
					onPress={() => navigation.navigate('register')}
				>
					Register
				</Button>
			</Surface>
		</Base>
	)
}