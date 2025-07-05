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
				pink: {
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
				critical: {
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
					loud: {
						enabled: string;
					};
				};
				cyan: {
					calm: {
						enabled: string;
					};
					loud: {
						enabled: string;
					};
				};
				blue: {
					calm: {
						enabled: string;
					};
					loud: {
						enabled: string;
					};
				};
				pink: {
					calm: {
						enabled: string;
					};
					loud: {
						enabled: string;
					};
				};
				grey: {
					calm: {
						enabled: string;
					};
					loud: {
						enabled: string;
					};
				};
				critical: {
					calm: {
						enabled: string;
					};
					loud: {
						enabled: string;
					};
				};
			};
			link: {
				calm: { enabled: string; hover: string; active: string };
				loud: { enabled: string; hover: string; active: string };
				onLight: { enabled: string; hover: string; active: string };
				onDark: { enabled: string; hover: string; active: string };
				inverted: { enabled: string; hover: string; active: string };
			};
		};
		typography: {
			fontFamily: {
				heading: string;
				text: string;
				monospace: string;
			};
			fontSize: {
				heading: {
					h1: string;
					h2: string;
					h3: string;
					h4: string;
					h5: string;
					h6: string;
				};
				text: {
					base: string;
					small: string;
					extraSmall: string;
				};
				component: {
					base: string;
					small: string;
					extraSmall: string;
				};
			};
			lineHeight: {
				heading: {
					h1: string;
					h2: string;
					h3: string;
					h4: string;
					h5: string;
					h6: string;
				};
				text: {
					base: string;
					small: string;
					extraSmall: string;
				};
				component: {
					base: string;
					small: string;
					extraSmall: string;
				};
			};
			fontWeight: {
				regular: string;
				medium: string;
				semiBold: string;
			};
		};
		spacing: {
			inner: {
				noGap: string;
				closest: string;
				close: string;
				related: string;
				grouped: string;
			};
			outer: {
				related: string;
				grouped: string;
				subSection: string;
				section: string;
			};
			padding: {
				compact: string;
				default: string;
				relaxed: string;
				large: string;
			};
			height: {
				xxxxSmall: string;
				xxxSmall: string;
				xxSmall: string;
				xSmall: string;
				small: string;
				base: string;
				large: string;
				xLarge: string;
				xxLarge: string;
			};
		};
		borderRadius: {
			micro: string;
			componentInner: string;
			componentBase: string;
			secionInner: string;
			sectionBase: string;
		};
		shadows: {
			surface: {
				elevated: string;
				hover: string;
			};
			overlay: {
				content: string;
				tooltip: string;
				drawer: string;
				modal: string;
				notifications: string;
			};
		};
		zIndices: {};
		focus: string;
		animation: {
			base: string;
		};
	}
}
