import React, { useState } from "react";
import { AiOutlineUser } from 'react-icons/ai';
import styled from "styled-components";
import { Link } from "react-router-dom";

const OptionsContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #f5f5f5;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const OptionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ebebeb;
  }
`;

const UserIcon = styled(AiOutlineUser)`
  margin-right: 5px;
  font-size: 35px;
  color: #f5f5f5;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: grey;
  }
`;

const UserOptions = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = () => {
    // Lógica para fazer logout do usuário
    console.log("Logout");
  };

  const handleProfile = () => {
    // Lógica para redirecionar para a página de perfil do usuário
    console.log("Profile");
  };

  return (
    <div>
      <UserIcon onClick={toggleOptions} />
      {showOptions && (
        <OptionsContainer>
          <OptionItem>
            <Link to ="/login">Login</Link> 
          </OptionItem>
          <OptionItem>
            <Link to="/cadastro-usuarios">Cadastro</Link>
          </OptionItem>
          <OptionItem onClick={handleLogout}>Logout</OptionItem>
        </OptionsContainer>
      )}
    </div>
  );
};

export default UserOptions;
