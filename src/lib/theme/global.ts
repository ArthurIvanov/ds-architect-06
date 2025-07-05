import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {

            font-family: ${(props) => props.theme.typography.fontFamily.text};
            background: ${(props) =>
				props.theme.colors.bg.neutral.section.calm};
	}
`;
