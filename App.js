import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

import Navbar from './src/components/navbar';
import Landing from './src/screens/landing';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Profile from './src/screens/profile';

const Stack = createStackNavigator();

export default function App() {
	const scheme = useColorScheme();

	const theme = scheme === 'light' ? MD3LightTheme : MD3DarkTheme;

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={theme}>
				<Stack.Navigator
					initialRouteName="landing"
					screenOptions={{
						header: (props) => <Navbar {...props} />,
					}}
				>
					<Stack.Screen name="landing" component={Landing} />
					<Stack.Screen name="login" component={Login} />
					<Stack.Screen name="register" component={Register} />
					<Stack.Screen name="profile" component={Profile} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider >
	);
}
