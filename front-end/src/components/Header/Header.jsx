import React from "react";
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  background-color: #B80F0A;
  padding: 15px;
  margin-bottom: 70px;
  gap: 50px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffffff80;
      text-decoration: underline;
    }
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
`;

const Logo = styled(Link)`
font-family: Arial, sans-serif;
font-size: 24px;
padding: 10px;
background-color: #f5f5f5;
border-radius: 50%;
display: inline-block;
`;

const CartIcon = styled(GiShoppingCart)`
  margin-right: 5px;
`;

const UserIcon = styled(AiOutlineUser)`
  margin-right: 5px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;

const SearchIcon = styled(IoSearchOutline)`
  color: #B80F0A;
  margin-right: 5px;
`;

export const Cabecalho = () => {
  return (
    <HeaderArea>
      <Logo to="/">Logo</Logo>
      <SearchBar>
        <SearchIcon />
        <SearchInput type="text" placeholder="Buscar produtos" />
      </SearchBar>
      <NavLinks>
        <NavLink to="/profile">
          <UserIcon /> 
        </NavLink>
        <NavLink to="/cart">
          <CartIcon /> 
        </NavLink>
      </NavLinks>
    </HeaderArea>
  );
};
