const PAGES = {
	MAIN: "Main",
	HOME: "Home",
	ABOUT: "About",
	PROFILE: "Profile",
	EXPLORE: "Explore",
	SPLASH: "Splash",
};

export default PAGES;
export type PageType = keyof typeof PAGES;
export type PageValueType = (typeof PAGES)[PageType];
