import styled from "styled-components";
import { Conteiner } from "../../styles/conteiner";
import img from "../../assets/img/redes.png"

export const Ddiv = styled.div`
    position: relative;

    .xx{
        position: absolute;
        left: 10%;
        top: 10%;
    }

    .cc{
        top: 40%;
        width: 40%;
        height: 20%;
        text-align: start;
    }
`

export const ConteinerRedes = styled.div`
    max-width: 100%;
    padding: 2rem;
    background: url(${img}) center center scroll ;
    height: 40vh;
    opacity: .3;
    margin-bottom: 2rem;
`   
