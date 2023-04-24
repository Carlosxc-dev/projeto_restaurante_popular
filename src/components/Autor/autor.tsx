import React from "react";
import { Text, Title } from "../../styles/title";
import { ConteinerAbout } from "./s-autor";

export default function Autor() {
    return (
        <ConteinerAbout>
			<Text className="xx cc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cum voluptatem nisi. 
				Tenetur maiores, beatae earum deserunt neque,
				ullam rem voluptas illum nobis fugiat dicta voluptate? In commodi autem dolor.</Text>
            <Title className="xx">title</Title>
        </ConteinerAbout>
    )
}