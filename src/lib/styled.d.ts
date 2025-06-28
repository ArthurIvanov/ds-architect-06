import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			bg: {
				disabled: string;
				neutral: {
					section: {
						calm: string;
						calmInverted: string;
						bold: string;
						lightStatic: string;
						darkStatic: string;
					};
					global: {
						calm: string;
					};
				};
				lead: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					loudStatic: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				green: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				cyan: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				blue: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				critical: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				grey: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				pink: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					bold: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
			};

			border: {
				disabled: string;

				lead: {
					calm: {
						enabled: string;
						hover: string;
						active: string;
					};
					loud: {
						enabled: string;
						hover: string;
						active: string;
					};
					onLight: {
						enabled: string;
						hover: string;
						active: string;
					};
					onDark: {
						enabled: string;
						hover: string;
						active: string;
					};
					inverted: {
						enabled: string;
						hover: string;
						active: string;
					};
				};
				green: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				cyan: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				blue: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				critical: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				grey: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				pink: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
			};

			text: {
				main: string;
				mainOnLight: string;
				mainOnDark: string;
				secondary: string;
				tertiary: string;
				disabled: string;
				inverted: string;
				green: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				cyan: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				blue: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				critical: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				grey: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
				pink: {
					calm: {
						enabled: string;
					};
					bold: {
						enabled: string;
					};
				};
			};

			link: {
				calm: {
					enabled: string;
					hover: string;
					active: string;
				};
				loud: {
					enabled: string;
					hover: string;
					active: string;
				};
				onLight: {
					enabled: string;
					hover: string;
					active: string;
				};
				onDark: {
					enabled: string;
					hover: string;
					active: string;
				};
				inverted: {
					enabled: string;
					hover: string;
					active: string;
				};
			};
		};
		// typography: {};
		// spacing: {};
		// borderRadius: {};
	}
}
