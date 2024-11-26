import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Home = () => {
  return (
    <HomePage>
      <Title>Bienvenue</Title>
      <Description>
        Ceci est la page d'accueil. Utilisez les liens pour naviguer dans l'application.
      </Description>
    </HomePage>
  );
};

export default Home;
