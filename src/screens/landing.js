import React from 'react';
import { View, Text, Button } from 'react-native';

function landing({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Landing Screen</Text>
			<Button title="Login" onPress={() => navigation.navigate('login')} />
			<Button
				title="Register"
				onPress={() => navigation.navigate('register')}
			/>
		</View>
	);
}

export default landing;
