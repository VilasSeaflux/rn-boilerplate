import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PAGES from "constant/pages";
import BottomTabNavigation from "./BottomTabs";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Group>
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
