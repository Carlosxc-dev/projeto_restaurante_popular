import styled from "styled-components";
import { Conteiner } from "../../styles/conteiner";

export const ConteinerAbout = styled(Conteiner)`
    max-width: 80%;
    margin: auto;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    margin-bottom: 4rem;

    img{
        width: 40%;
        height: 100%;
    }

    .tt{
        height: 100%;
        width: 100%;
        text-align: start;
        padding: 0px 20px;
    }
`