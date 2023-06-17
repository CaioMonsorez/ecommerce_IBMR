import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const VerificacaoUsuarioContainer = styled.div`
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

const VerificacaoUsuario = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto com os dados do formulário
    const verificationData = {
      email: email,
      verificationCode: verificationCode,
    };

    // Simule uma requisição para verificar o código de verificação
    // Neste exemplo, apenas exibimos um alerta com o resultado
    axios
      .post("http://localhost:8010/verificarUsuario", verificationData)
      .then((response) => {
        alert("Código de verificação válido!");
        history.push("/dashboard"); // Redireciona para a página de dashboard
      })
      .catch((error) => {
        alert("Código de verificação inválido:", error);
      });
  };

  return (
    <VerificacaoUsuarioContainer>
      <Title>Verificação de Usuário</Title>
      <Form onSubmit={handleSubmit}>
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
          <Label htmlFor="verificationCode">Código de Verificação:</Label>
          <Input
            required
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Verificar</Button>
      </Form>
    </VerificacaoUsuarioContainer>
  );
};

export default VerificacaoUsuario;
