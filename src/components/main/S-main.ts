/** @format */

import styled from "styled-components";
import { Conteiner } from "../../styles/conteiner";

export const Main = styled.main`
	width: 100%;
	height: 250vh;
	background: url("../../src/assets/img/backgraundCardapio.png");
	display: grid;
	grid: 10% 90% / 1fr 1fr;
	padding: 0px 5rem;
	row-gap: 5rem;

	.title {
		width: 100%;
		grid-column: span 2;
	}

	.conteinerImagens {
		width: 50%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 10px;

		img {
			height: auto;
			width: min-content;
		}

		.img1 {
			grid-column: span 2;
		}
		.img4 {
			grid-row: span 2;
		}
	}

	.conteinerPratos {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		justify-content: start;
		align-items: center;
		flex: 1 1 200px;

		.pratos {
			width: 60%;
			height: auto;
			background-color: #3c3636;
			border-radius: 5px 5px 30px 5px;
			display: grid;
			grid-template-columns: 40% 60%;
			grid-template-rows: 40% 60%;
            justify-content: center;
            align-items: center;
            align-content: center;

            .ff{
                grid-row: span 2;
            }
		}
	}
`;
