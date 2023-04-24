/** @format */
import img from "../../assets/img/prato.jpg"

import { ConteinerCard, ImgCard } from "./S-card";
import { Title, Text } from "../../styles/title";
import { CardText } from "./S-card";
import { Conteiner } from "../../styles/conteiner";

export default function Card(props: any) {
	return (
		<ConteinerCard>
			<Conteiner>
				<ImgCard src={img} alt="imagem prato restaurante" />
			</Conteiner>
			<CardText>
				<Title>{props.text}</Title>
				<Text>{props.desc}</Text>
			</CardText>
		</ConteinerCard>
	);
}
