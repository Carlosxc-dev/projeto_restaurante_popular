/** @format */
import Footer from "./components/footer/footer";
import { Global } from "./styles/globalStyle";
import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";
import Redes from "./components/redes/redes";
import Autor from "./components/Autor/autor";
import { ThemeProvider } from "styled-components";
import {theme} from "./styles/theme"
import Bloco from "./components/bloco-cards/bloco"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Header />
			<Bloco />
			<About/>
			<Redes/>
			<Main />
			<Autor/>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
