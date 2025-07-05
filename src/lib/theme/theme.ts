import { DefaultTheme } from "styled-components";
import { colors, typography, spacers, zIndices } from "./tokens";

export const lightTheme: DefaultTheme = {
	colors: {
		bg: {
			disabled: colors.grey[100],
			neutral: {
				section: {
					calm: colors.base.white,
					calmInverted: colors.grey[800],
					bold: colors.grey[800],
					lightStatic: colors.base.white,
					darkStatic: colors.grey[800],
				},
				global: {
					calm: colors.grey[50],
				},
			},
			lead: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				loudStatic: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[200],
				},
			},
			green: {
				calm: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				bold: {
					enabled: colors.green[500],
					hover: colors.green[600],
					active: colors.green[700],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				loud: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				bold: {
					enabled: colors.cyan[500],
					hover: colors.cyan[600],
					active: colors.cyan[700],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
					hover: colors.blue[100],
					active: colors.blue[200],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				bold: {
					enabled: colors.blue[500],
					hover: colors.blue[600],
					active: colors.blue[700],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
					hover: colors.pink[100],
					active: colors.pink[200],
				},
				loud: {
					enabled: colors.pink[400],
					hover: colors.pink[500],
					active: colors.pink[600],
				},
				bold: {
					enabled: colors.pink[500],
					hover: colors.pink[600],
					active: colors.pink[700],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
					hover: colors.grey[100],
					active: colors.grey[200],
				},
				loud: {
					enabled: colors.grey[400],
					hover: colors.grey[500],
					active: colors.grey[200],
				},
				bold: {
					enabled: colors.grey[500],
					hover: colors.grey[600],
					active: colors.grey[700],
				},
			},
		},
		border: {
			disabled: colors.grey[100],
			lead: {
				calm: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onLight: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onDark: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				inverted: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
			},
			green: {
				calm: {
					enabled: colors.green[100],
				},
				bold: {
					enabled: colors.green[500],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[100],
				},
				bold: {
					enabled: colors.cyan[500],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[100],
				},
				bold: {
					enabled: colors.blue[500],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[100],
				},
				bold: {
					enabled: colors.pink[500],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[100],
				},
				bold: {
					enabled: colors.grey[500],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[100],
				},
				bold: {
					enabled: colors.red[500],
				},
			},
		},
		text: {
			main: colors.grey[800],
			mainOnLight: colors.grey[800],
			mainOnDark: colors.grey[50],
			secondary: colors.grey[500],
			tertiary: colors.grey[400],
			disabled: colors.grey[300],
			inverted: colors.base.white,
			green: {
				calm: {
					enabled: colors.green[50],
				},
				loud: {
					enabled: colors.green[400],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
				},
				loud: {
					enabled: colors.cyan[400],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[50],
				},
				loud: {
					enabled: colors.blue[400],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[50],
				},
				loud: {
					enabled: colors.pink[400],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[50],
				},
				loud: {
					enabled: colors.grey[400],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[50],
				},
				loud: {
					enabled: colors.red[400],
				},
			},
		},
		link: {
			calm: {
				enabled: colors.blue[100],
				hover: colors.blue[200],
				active: colors.blue[300],
			},
			loud: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onLight: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onDark: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
			inverted: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
		},
	},
	typography: {
		fontFamily: {
			heading: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
			text: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
			monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
		},
		fontSize: {
			heading: {
				h1: typography.fontSize.h1,
				h2: typography.fontSize.h2,
				h3: typography.fontSize.h3,
				h4: typography.fontSize.h4,
				h5: typography.fontSize.h5,
				h6: typography.fontSize.h6,
			},
			text: {
				base: typography.fontSize.base,
				small: typography.fontSize.small,
				extraSmall: typography.fontSize.extraSmall,
			},
			component: {
				base: typography.fontSize.base,
				small: typography.fontSize.small,
				extraSmall: typography.fontSize.extraSmall,
			},
		},
		lineHeight: {
			heading: {
				h1: typography.lineHeight.h1,
				h2: typography.lineHeight.h2,
				h3: typography.lineHeight.h3,
				h4: typography.lineHeight.h4,
				h5: typography.lineHeight.h5,
				h6: typography.lineHeight.h6,
			},
			text: {
				base: typography.lineHeight.base,
				small: typography.lineHeight.small,
				extraSmall: typography.lineHeight.extraSmall,
			},
			component: {
				base: typography.lineHeight.base,
				small: typography.lineHeight.small,
				extraSmall: typography.fontSize.extraSmall,
			},
		},
		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			semiBold: typography.fontWeight.semiBold,
		},
	},
	spacing: {
		inner: {
			noGap: spacers.none,
			closest: spacers[2],
			close: spacers[4],
			related: spacers[8],
			grouped: spacers[16],
		},
		outer: {
			related: spacers[8],
			grouped: spacers[16],
			subSection: spacers[24],
			section: spacers[48],
		},
		padding: {
			compact: spacers[8],
			default: spacers[16],
			relaxed: spacers[24],
			large: spacers[32],
		},
		height: {
			xxxxSmall: spacers[4],
			xxxSmall: spacers[8],
			xxSmall: spacers[16],
			xSmall: spacers[24],
			small: spacers[32],
			base: spacers[40],
			large: spacers[48],
			xLarge: spacers[56],
			xxLarge: spacers[64],
		},
	},
	borderRadius: {
		micro: spacers[2],
		componentInner: spacers[4],
		componentBase: spacers[8],
		secionInner: spacers[12],
		sectionBase: spacers[12],
	},
	shadows: {
		surface: {
			elevated: `0px 1px 6px rgba(34, 49, 69, 0.12)`,
			hover: `0px 2px 12px rgba(34, 49, 69, 0.12)`,
		},
		overlay: {
			content: `0px 2px 4px rgba(14, 19, 27, 0.16)`,
			tooltip: `0px 2px 8px rgba(14, 19, 27, 0.12)`,
			drawer: `0px 2px 12px rgba(14, 19, 27, 0.12)`,
			modal: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
			notifications: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
		},
	},
	zIndices: { ...zIndices },
	focus: `0px 0px 0px 2px rgba(79, 96, 255, 0.25)`,
	animation: {
		base: `all 0.2s`,
	},
};

export const darkTheme: DefaultTheme = {
	...lightTheme,
	colors: {
		bg: {
			disabled: colors.grey[700],
			neutral: {
				section: {
					calm: colors.grey[800],
					calmInverted: colors.base.white,
					bold: colors.grey[100],
					lightStatic: colors.base.white,
					darkStatic: colors.grey[800],
				},
				global: {
					calm: colors.grey[900],
				},
			},
			lead: {
				calm: {
					enabled: colors.blue[800],
					hover: colors.blue[700],
					active: colors.blue[600],
				},
				loud: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				loudStatic: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[200],
				},
			},
			green: {
				calm: {
					enabled: colors.green[800],
					hover: colors.green[700],
					active: colors.green[600],
				},
				loud: {
					enabled: colors.green[200],
					hover: colors.green[100],
					active: colors.green[50],
				},
				bold: {
					enabled: colors.green[300],
					hover: colors.green[200],
					active: colors.green[100],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[800],
					hover: colors.cyan[700],
					active: colors.cyan[600],
				},
				loud: {
					enabled: colors.cyan[200],
					hover: colors.cyan[100],
					active: colors.cyan[50],
				},
				bold: {
					enabled: colors.cyan[300],
					hover: colors.cyan[200],
					active: colors.cyan[100],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[800],
					hover: colors.blue[700],
					active: colors.blue[600],
				},
				loud: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				bold: {
					enabled: colors.blue[300],
					hover: colors.blue[200],
					active: colors.blue[100],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[800],
					hover: colors.pink[700],
					active: colors.pink[600],
				},
				loud: {
					enabled: colors.pink[200],
					hover: colors.pink[100],
					active: colors.pink[50],
				},
				bold: {
					enabled: colors.pink[300],
					hover: colors.pink[200],
					active: colors.pink[100],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[800],
					hover: colors.grey[700],
					active: colors.grey[600],
				},
				loud: {
					enabled: colors.grey[200],
					hover: colors.grey[100],
					active: colors.grey[50],
				},
				bold: {
					enabled: colors.grey[300],
					hover: colors.grey[200],
					active: colors.grey[100],
				},
			},
		},
		border: {
			disabled: colors.grey[800],
			lead: {
				calm: {
					enabled: colors.blue[700],
					hover: colors.blue[800],
					active: colors.blue[900],
				},
				loud: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				onLight: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
				onDark: {
					enabled: colors.blue[200],
					hover: colors.blue[100],
					active: colors.blue[50],
				},
				inverted: {
					enabled: colors.blue[400],
					hover: colors.blue[500],
					active: colors.blue[600],
				},
			},
			green: {
				calm: {
					enabled: colors.green[600],
				},
				bold: {
					enabled: colors.green[300],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[600],
				},
				bold: {
					enabled: colors.cyan[300],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[600],
				},
				bold: {
					enabled: colors.blue[300],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[600],
				},
				bold: {
					enabled: colors.pink[300],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[600],
				},
				bold: {
					enabled: colors.grey[300],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[600],
				},
				bold: {
					enabled: colors.red[300],
				},
			},
		},
		text: {
			main: colors.grey[50],
			mainOnLight: colors.grey[800],
			mainOnDark: colors.grey[50],
			secondary: colors.grey[200],
			tertiary: colors.grey[300],
			disabled: colors.grey[400],
			inverted: colors.grey[800],
			green: {
				calm: {
					enabled: colors.green[800],
				},
				loud: {
					enabled: colors.green[200],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[800],
				},
				loud: {
					enabled: colors.cyan[200],
				},
			},
			blue: {
				calm: {
					enabled: colors.blue[800],
				},
				loud: {
					enabled: colors.blue[200],
				},
			},
			pink: {
				calm: {
					enabled: colors.pink[800],
				},
				loud: {
					enabled: colors.pink[200],
				},
			},
			grey: {
				calm: {
					enabled: colors.grey[800],
				},
				loud: {
					enabled: colors.grey[200],
				},
			},
			critical: {
				calm: {
					enabled: colors.red[800],
				},
				loud: {
					enabled: colors.red[200],
				},
			},
		},
		link: {
			calm: {
				enabled: colors.blue[600],
				hover: colors.blue[500],
				active: colors.blue[400],
			},
			loud: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
			onLight: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			onDark: {
				enabled: colors.blue[200],
				hover: colors.blue[100],
				active: colors.blue[50],
			},
			inverted: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
		},
	},
};
