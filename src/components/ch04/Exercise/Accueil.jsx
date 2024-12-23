import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Accueil = () => {
  return (
    <HomePage>
      <Title>Bienvenue à l'application React</Title>
      <Description>
        Naviguez entre les pages à l'aide du menu ci-dessus pour explorer les fonctionnalités.
      </Description>
    </HomePage>
  );
};

export default Accueil;
