import {
	View,
	Dimensions,
	StyleSheet,
	type LayoutChangeEvent,
} from "react-native";
import { useState } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import TabBarButton from "@components/atoms/TabBarButton";
import PAGES from "constant/pages";

const { width } = Dimensions.get("window");

const TabBar = ({ state, descriptors, navigation }: any) => {
	const [dimensions, setDimensions] = useState({ height: 20, width: 30 });

	const buttonWidth = dimensions.width / state.routes.length;

	const onTabbarLayout = (e: LayoutChangeEvent) => {
		setDimensions({
			height: e.nativeEvent.layout.height,
			width: e.nativeEvent.layout.width,
		});
	};
	const tabPositionX = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: tabPositionX.value,
				},
			],
		};
	});
	return (
		<View
			className="flex-row relative bottom-6 z-50 bg-primary-800 mx-8 rounded-xl py-3 items-center justify-center"
			onLayout={onTabbarLayout}
		>
			<Animated.View
				className="absolute rounded-[30px] bg-primary mx-4 left-0 opacity-30 border border-primary-400"
				style={[
					animatedStyle,
					{ height: dimensions.height - 10, width: buttonWidth - 25 },
				]}
			/>
			{state.routes.map((route: any, index: number) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;
				const getIcon = () => {
					switch (route.name) {
						case PAGES.HOME:
							return "home";
						case PAGES.EXPLORE:
							return "compass-outline";
						case PAGES.PROFILE:
							return "account";
					}
				};
				const icon = getIcon();

				const onPress = () => {
					tabPositionX.value = withSpring(buttonWidth * index, {
						damping: 18, // higher = less bounce
						stiffness: 200, // higher = snappier
						mass: 0.4, // lower = settles faster
					});
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const color = isFocused ? "#fff" : "#7A869A";
				return (
					<TabBarButton
						color={color}
						icon={icon}
						isFocused={isFocused}
						label={label}
						onPress={onPress}
						routeName={route.name}
						key={route.name}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 25,
		backgroundColor: "#182028",
		borderRadius: 25,
		marginHorizontal: width * 0.1,
		// Shadow for iOS
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.35,
		shadowRadius: 8,
		// Shadow for Android
		elevation: 8,
	},
	mainItemContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 0,
		borderRadius: 1,
		borderColor: "#333B42",
	},
});

export default TabBar;
