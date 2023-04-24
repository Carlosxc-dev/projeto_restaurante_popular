import styled from "styled-components";
import { Conteiner } from "../../styles/conteiner";
import img from "../../assets/img/hero.png"

export const ConteinerHeader = styled(Conteiner)`
    height: 150vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 2rem;
    background: url(${img}) ;
    background-size: cover;
    background-position: center center;

    .logo{
        color: ${props => props.theme.primary};
        position: absolute;
        top: 50%;
        left: 12%;
        width: max-content;
        font-size: 4rem; 
    }

    .text{
        top: 60%;
        left: 20%;
        font-size: 2rem;
    }

    .conteinerBloco{
        width: 80%;
        height: 150px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
    }

    .bloco{
        background-color: ${props=>props.theme.background};
    }
`