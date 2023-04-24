/** @format */

import React from "react";
import { Conteiner } from "../../styles/conteiner";
import { Text, Title } from "../../styles/title";
import { ConteinerAbout } from "./S-about";
import img from "../../assets/img/about.png";

export default function about() {
	return (
		<ConteinerAbout>
			<img src={img} alt="imagem de comida" />
			<div className="tt">
				<Title>Sobre a empresa</Title>
				<Text>
					horarios 
					adress 
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod 
					temporibus architecto non ea harum repudiandae perspiciatis corrupti nihil 
					quisquam dolorum illum eos sunt, voluptates ipsa laboriosam distinctio! Deleniti, culpa.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod 
					temporibus architecto non ea harum repudiandae perspiciatis corrupti nihil 
					quisquam dolorum illum eos sunt, voluptates ipsa laboriosam distinctio! Deleniti, culpa.
				</Text>
			</div>
		</ConteinerAbout>
	);
}
