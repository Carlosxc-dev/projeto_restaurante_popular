/** @format */

import styled from "styled-components";

export const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 3rem;
	line-height: 83px;
	color: ${props => props.theme.primary};
	text-align: center;
`;

export const Text = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 30px;
	text-align: center;
	color: ${props=> props.theme.text};
`;
