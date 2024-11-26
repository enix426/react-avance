import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ isAuthenticated }) => {
  return (
    <Navbar>
      <Logo>React App</Logo>
      <NavLinks>
        <StyledLink to="/">Accueil</StyledLink>
        {isAuthenticated ? (
          <>
            <StyledLink to="/profil/1">Profil 1</StyledLink>
            <StyledLink to="/profil/2">Profil 2</StyledLink>
          </>
        ) : (
          <StyledLink to="/login">Se connecter</StyledLink>
        )}
      </NavLinks>
    </Navbar>
  );
};

export default Header;
