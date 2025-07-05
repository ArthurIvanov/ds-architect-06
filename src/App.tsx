import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Card } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Card />
			</main>
		</ThemeProvider>
	);
}

export default App;
