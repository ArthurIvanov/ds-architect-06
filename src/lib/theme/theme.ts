import { DefaultTheme } from "styled-components";
import { colors } from "./tokens/colors";

export const lightTheme: DefaultTheme = {
	colors: {
		bg: {
			neutral: {
				section: {
					calm: colors.base.white,
				},
			},
		},
		text: {
			main: colors.grey[800],
		},
	},
};

export const darkTheme: DefaultTheme = {
	...lightTheme,
	colors: {
		bg: {
			neutral: {
				section: {
					calm: colors.grey[800],
				},
			},
		},
		text: {
			main: colors.grey[50],
		},
	},
};
