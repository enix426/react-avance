import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8d7da;
  color: #721c24;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

export const PageNonTrouvee = () => (
  <NotFoundContainer>
    <Title>Erreur 404</Title>
    <Message>La page que vous recherchez n'existe pas.</Message>
  </NotFoundContainer>
);
