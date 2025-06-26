import {
	Image,
	type ImageContentFit,
	type ImageSource,
	type ImageStyle,
} from "expo-image";
import type { StyleProp } from "react-native";

type Props = {
	style: StyleProp<ImageStyle>;
	source: string | ImageSource; //required
	transition?: number;
	contentFit?: ImageContentFit;
	className?: string;
};

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

/**
 * Renders a FastImage component with customizable styling, source, transition, and content fit options.
 *
 * @param style - Optional style object to apply to the image.
 * @param source - The image source, such as a URI or local asset.
 * @param transition - Optional transition duration (in ms) for image loading.
 * @param contentFit - Optional content fit mode (e.g., "contain", "cover").
 * @param className - Optional CSS class name(s) for styling.
 * @returns A React element displaying the image with the specified properties.
 */
export default function index({
	style,
	source,
	transition,
	contentFit,
	className,
}: Props) {
	return (
		<Image
			className={className}
			style={style || {}}
			source={source}
			placeholder={{ blurhash }}
			transition={transition || 0}
			contentFit={contentFit || "contain"}
		/>
	);
}
