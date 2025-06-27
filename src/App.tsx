import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./navigation";
import "./global.css";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
// 	duration: 2000,
// 	fade: true,
// });

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepareApp() {
			try {
				// Load your fonts here
				// await Font.loadAsync()
				await new Promise((res) => setTimeout(res, 1800));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepareApp();
	}, []);

	const onLayoutRootView = useCallback(() => {
		if (appIsReady) {
			SplashScreen.hide();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return (
			<View>
				<Text>Hello World</Text>
			</View>
		);
	}

	return (
		<SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<Navigation />
		</SafeAreaView>
	);
}
