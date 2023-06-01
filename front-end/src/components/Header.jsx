import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
    display:flex;
    align-items:center;
    background-color: #B80F0A;
    padding:20px;
    margin-bottom:70px;
    gap:50px;

    a {
        text-decoration:none;
        color:white;
    }   

    & :hover{
        text-decoration:underline;
    }
`;

export const Cabecalho = () => {
    return(
        <HeaderArea>
         <Link to="">Home</Link>
         <Link to="/">Iphones</Link>
         <Link to="">Acessórios</Link>
         <Link to="">Eletrodomésticos</Link>
         <Link to="/cart">Carrinho</Link>
         </HeaderArea>
    )    
}