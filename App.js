import { useColorScheme } from 'react-native';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import NavManager from './src/components/navmanager';

export default function App() {
	const scheme = useColorScheme();
	const theme = scheme === 'light' ? MD3LightTheme : MD3DarkTheme;

	return (
		<PaperProvider theme={theme}>
			<NavManager theme={theme} />
		</PaperProvider >
	);
}
