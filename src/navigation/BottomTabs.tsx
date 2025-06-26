import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PAGES from "constant/pages";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Explore from "@screens/Explore";
import TabBar from "@components/molecules/TabBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName={PAGES.HOME}
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{ headerShown: false }}
			detachInactiveScreens
		>
			<Tab.Screen name={PAGES.HOME} component={Home} />
			<Tab.Screen name={PAGES.EXPLORE} component={Explore} />
			<Tab.Screen name={PAGES.PROFILE} component={Profile} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
