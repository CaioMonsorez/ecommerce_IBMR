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
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const userData = {
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
      birthdate: birthdate,
    };

    // Make a request to the /cadastrarUsuarios endpoint using the library of your choice (e.g., axios)
    axios
      .post("http://localhost:8010/cadastrarUsuarios", userData)
      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        history.push("/"); // Redirect to the Home page
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
        <FormGroup>
          <Label htmlFor="address">Endereço:</Label>
          <Input
            required
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Telefone:</Label>
          <Input
            required
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="birthdate">Data de Nascimento:</Label>
          <Input
            required
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </CadastroUsuariosContainer>
  );
};

export default CadastroUsuarios;
