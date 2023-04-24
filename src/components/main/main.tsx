import Card from "../card/card"
import { Text, Title } from "../../styles/title"
import {Main} from "./S-main" 
import img1 from "../../assets/img/img-cardapio/Rectangle 39.png"
import img2 from "../../assets/img/img-cardapio/Rectangle 40.png"
import img3 from "../../assets/img/img-cardapio/Rectangle 42.png"
import img4 from "../../assets/img/img-cardapio/Rectangle 41.png"

export default function main() {
  return (
        <Main>
            <Title className="title">Cardapio</Title>

            <div className="conteinerImagens">
              <img className="img1" src={img1} alt="comidas de restaurante" />
              <img className="img2" src={img2} alt="comidas de restaurante" />
              <img className="img4"src={img4} alt="comidas de restaurante" />
              <img className="img3"src={img3} alt="comidas de restaurante" />
            </div>

            <div className="conteinerPratos">
              <div className="pratos">
                <img className="ff" src="" alt="pratos de comida" />
                <Title>titulo</Title>
                <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
              </div>
              <div className="pratos">
                <img className="ff" src="" alt="pratos de comida" />
                <Title>titulo</Title>
                <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
              </div>
              <div className="pratos">
                <img className="ff" src="" alt="pratos de comida" />
                <Title>titulo</Title>
                <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
              </div>
              
            </div>
        </Main>
  )
}