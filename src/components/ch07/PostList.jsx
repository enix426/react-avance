import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const PostListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostItem = styled.li`
  background: #f9f9f9;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  color: #1890ff;
  margin-bottom: 5px;
`;

const PostBody = styled.p`
  color: #555;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
`;

// Component
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SpinnerContainer>
        <Spin size="large" />
      </SpinnerContainer>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Erreur : {error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Liste des postes</Title>
      <PostListContainer>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </PostItem>
        ))}
      </PostListContainer>
    </Container>
  );
};

export default PostList;
