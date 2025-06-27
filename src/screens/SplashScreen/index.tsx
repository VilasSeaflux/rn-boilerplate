import { Dimensions, View } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import PAGES from "constant/pages";

const { width, height } = Dimensions.get("screen");

export default function SplashScreen({
	navigation,
}: { navigation: NavigationType }) {
	const animationRef = useRef<LottieView | null>(null);

	useEffect(() => {
		animationRef.current?.play();
	}, []);

	return (
		<View className="w-full h-full items-center justify-center">
			<LottieView
				ref={animationRef}
				source={require("@assets/lottie/splash-logo.json")}
				style={{
					width: width - 50,
					height: height - 200,
				}}
				autoPlay
				loop={false}
				onAnimationFinish={async () => {
					navigation.replace(PAGES.MAIN, "");
				}}
				renderMode="SOFTWARE"
			/>
		</View>
	);
}
