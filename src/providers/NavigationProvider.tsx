import { View, Text } from "react-native";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function NavigationProvider({ children }: Props) {
	return <NavigationProvider>{children}</NavigationProvider>;
}
