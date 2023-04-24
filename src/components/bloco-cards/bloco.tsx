/** @format */

import { Text, Title } from "../../styles/title";
import { ConteinerBloco } from "./S-bloco";

export default function bloco() {
	return (
		<ConteinerBloco>
			<div className="bloco">
				<Title>titulo</Title>
				<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus 
                    facere veniam tempora saepe aspernatur assumenda quod molestias iusto!</Text>
			</div>
			<div className="bloco">
				<Title>titulo</Title>
				<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus 
                    facere veniam tempora saepe aspernatur assumenda quod molestias iusto!</Text>
			</div>
			<div className="bloco">
				<Title>titulo</Title>
				<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus 
                    facere veniam tempora saepe aspernatur assumenda quod molestias iusto!</Text>
			</div>
		</ConteinerBloco>
	);
}
