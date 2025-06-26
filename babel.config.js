module.exports = (api) => {
	api.cache(true);
	return {
		presets: [
			["babel-preset-expo", { jsxImportSource: "nativewind" }],
			"nativewind/babel",
		],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						"@components": "./src/components",
						"@providers": "./src/providers",
						"@hooks": "./src/hooks",
						"@screens": "./src/screens",
						"@utils": "./src/utils",
						"@assets": "./assets",
						"@constants": "./src/constants",
						"@navigation": "./src/navigation",
						"@services": "./src/services",
						"@store": "./src/store",
						"@styles": "./src/styles",
						"@types": "./src/types",
					},
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
