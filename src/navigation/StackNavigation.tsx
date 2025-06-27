import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PAGES from "constant/pages";
import BottomTabNavigation from "./BottomTabs";
import SplashScreen from "@screens/SplashScreen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName={PAGES.SPLASH}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group>
				<Stack.Screen
					name={PAGES.SPLASH}
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={PAGES.MAIN}
					component={BottomTabNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default StackNavigation;
