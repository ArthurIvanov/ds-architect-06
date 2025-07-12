import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Card, Button, Badge } from "./lib";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Card
					text="Подразделение ветроэнергетического дивизиона «Росатома» и
					«Кьези» подписали соглашение на приобретение «зеленых»
					сертификатов I-REC"
					newsData="12.07.2025"
					badgeText="Новости"
					buttonText="Подробнее"
				/>
				<Card
					text="Подразделение ветроэнергетического дивизиона «Росатома» и
					«Кьези» подписали соглашение на приобретение «зеленых»
					сертификатов I-REC"
					textSize="large"
					newsData="12.07.2025"
					badgeText="Новости"
					buttonText="Подробнее"
				/>
				Hide code
				<Button appearance="primary" size="base" text="Hello Primary" />
				<Card
					text="Подразделение ветроэнергетического дивизиона Росатома и Кьези подписали соглашение на приобретение зеленых сертификатов I - REC"
					textSize="base"
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;
