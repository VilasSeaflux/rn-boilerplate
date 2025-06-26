import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import {
	GestureHandlerRootView,
	Pressable,
	Text,
} from "react-native-gesture-handler";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

type Props = {
	isFocused: boolean;
	routeName: string;
	color: string;
	label: string;
	onPress: () => void;
	icon: any;
};
const TabBarButton = ({
	isFocused,
	routeName,
	color,
	label,
	onPress,
	icon,
}: Props) => {
	const scale = useSharedValue(0);

	useEffect(() => {
		scale.value = withSpring(
			typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
			{
				duration: 350,
			},
		);
	}, [scale, isFocused]);

	const animatedIconStyle = useAnimatedStyle(() => {
		const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
		return {
			transform: [
				{
					scale: scaleValue,
				},
			],
		};
	});

	return (
		<GestureHandlerRootView key={routeName}>
			<Pressable
				accessibilityRole="button"
				accessibilityState={isFocused ? { selected: true } : {}}
				accessibilityLabel={label}
				onPress={onPress}
				style={{ alignItems: "center", justifyContent: "center" }}
			>
				<Animated.View style={animatedIconStyle}>
					<MaterialCommunityIcons name={icon} size={28} color={"#FFF"} />
				</Animated.View>
			</Pressable>
		</GestureHandlerRootView>
	);
};

export default TabBarButton;
