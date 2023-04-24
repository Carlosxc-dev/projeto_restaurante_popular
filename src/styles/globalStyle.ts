import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body{
        background-color: #353030;
        width: 100%;
        height: 100%;
    }
`