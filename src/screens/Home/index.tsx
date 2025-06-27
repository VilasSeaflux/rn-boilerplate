import FastImage from "@components/atoms/FastImage";
import { View, Text, Image } from "react-native";

export default function Home() {
	return (
		<View className="flex flex-row h-screen w-screen items-center justify-center p-10 relative">
			<Text className="font-bold text-2xl text-primary self-start">
				Seaflux React Native Boilerplate
			</Text>
		</View>
	);
}
