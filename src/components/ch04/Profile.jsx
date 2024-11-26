import React from 'react';
import styled from 'styled-components';

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
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

const Profile = () => {
  return (
    <ProfilePage>
      <Title>Bienvenue dans votre Profil</Title>
      <Description>Ceci est une page protégée. Vous êtes authentifié.</Description>
    </ProfilePage>
  );
};

export default Profile;
