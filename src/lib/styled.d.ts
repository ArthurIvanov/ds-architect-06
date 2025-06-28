import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			bg: {
				neutral: {
					section: {
						calm: string;
					};
				};
			};
			text: {
				main: string;
			};
		};
		// typography: {};
		// spacing: {};
		// borderRadius: {};
	}
}
