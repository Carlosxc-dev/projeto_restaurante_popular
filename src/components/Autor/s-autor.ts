import styled from "styled-components";

import { Conteiner } from "../../styles/conteiner";
import img from "../../assets/img/img-backgraund-autor.png"

export const ConteinerAbout = styled(Conteiner)`
    max-width: 100%;
    height: 540px;
    margin: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    background-image: url(${img});
    background-size: cover;
    
`
