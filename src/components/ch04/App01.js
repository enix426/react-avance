import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
  text-align: center;
`;

// Components
const Accueil = () => {
  const products = [1, 2, 3]; // Example product IDs

  return (
    <PageContainer>
      <Title>Bienvenue sur la page d'accueil</Title>
      <Description>
        Découvrez notre site et explorez nos produits. Cliquez sur un produit pour voir les détails.
      </Description>
      <ProductList>
        {products.map((productId) => (
          <ProductLink key={productId} to={`/produit/${productId}`}>
            Voir Produit {productId}
          </ProductLink>
        ))}
      </ProductList>
    </PageContainer>
  );
};

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const ProductLink = styled(Link)`
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Profile = () => (
  <PageContainer>
    <Title>Votre Profil</Title>
    <Description>Ceci est votre page de profil. Modifiez vos informations ici.</Description>
  </PageContainer>
);

const Produit = () => {
  const { id } = useParams();

  return (
    <PageContainer>
      <Title>Détails du Produit</Title>
      <Description>ID du produit : {id}</Description>
    </PageContainer>
  );
};

const App = () => (
  <Router>
    <NavBar>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </NavBar>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/produit/:id" element={<Produit />} />
    </Routes>
  </Router>
);

export default App;
