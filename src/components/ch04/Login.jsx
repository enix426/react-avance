import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  return (
    <LoginPage>
      <Title>Connectez-vous</Title>
      <Link to="/profile">
        <Button>Se connecter</Button>
      </Link>
    </LoginPage>
  );
};

export default Login;
