import React from "react";
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  background-color: #19197d;
  padding: 15px;
  gap: 50px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #19197d;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: grey;
      text-decoration: underline;
      transition: all 0.5s;
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
  font-size: 35px;
  color: #f5f5f5;
  &:hover {
    color: grey;
    transition: all 0.5s;
  }
`;

const UserIcon = styled(AiOutlineUser)`
  margin-right: 5px;
  font-size: 35px;
  color: #f5f5f5;
  &:hover {
    color: grey;
    transition: all 0.5s;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  background-color: #f5f5f5;
`;

const SearchIcon = styled(IoSearchOutline)`
  color: #19197d;
  margin-right: 5px;
  font-size: 25px;
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
