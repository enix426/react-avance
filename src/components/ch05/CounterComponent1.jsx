import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import styled from 'styled-components';

// Styled Components
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f3f4f7, #e3e6ed);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const CounterDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #007bff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const CounterButton = styled.button`
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #666;
`;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <CounterContainer>
      <Title>Redux Counter</Title>
      <CounterDisplay>{counter}</CounterDisplay>
      <ButtonGroup>
        <CounterButton onClick={() => dispatch(decrement())}>Decrement</CounterButton>
        <CounterButton onClick={() => dispatch(increment())}>Increment</CounterButton>
      </ButtonGroup>
      <Footer>Built with Redux Toolkit and Styled Components</Footer>
    </CounterContainer>
  );
};

export default Counter;
