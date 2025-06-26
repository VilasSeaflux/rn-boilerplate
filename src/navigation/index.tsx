import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import BottomTabNavigation from "./BottomTabs";
import { Text } from "react-native";

export default function Navigation() {
	return (
		<NavigationContainer>
			{/* <StackNavigation /> */}
			<StackNavigation />
		</NavigationContainer>
	);
}
