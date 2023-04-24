/** @format */

import { ConteinerHeader } from "./S-header";
import { Title, Text } from "../../styles/title";
import { Conteiner } from "../../styles/conteiner";

export default function header() {
	return (
		<ConteinerHeader>
			<Title className="logo">Restaurante Popular</Title>
			<Title className="logo text">O melhor da Região</Title>
		</ConteinerHeader>
			
	);
}
