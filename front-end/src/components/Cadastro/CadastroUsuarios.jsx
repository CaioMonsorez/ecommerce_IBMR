import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CadastroUsuariosContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CadastroUsuarios = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto com os dados do formulário
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    // Faça uma requisição para o endpoint /cadastrarUsuarios usando a biblioteca de sua escolha (por exemplo, axios)
    axios
      .post("http://localhost:8010/cadastrarUsuarios", userData)
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        history.push("/"); // Redireciona para a página Home
      })
      .catch((error) => {
        alert("Erro ao cadastrar usuário:", error);
      });
  };

  return (
    <CadastroUsuariosContainer>
      <Title>Cadastro de Usuários</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
          required
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
          required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input
          required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroUsuariosContainer>
  );
};

export default CadastroUsuarios;
