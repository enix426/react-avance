import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f7f9fc;
    font-family: 'Arial', sans-serif;
`;

const CounterDisplay = styled.h1`
    font-size: 3rem;
    color: #333;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const Button = styled.button`
    background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.primary ? '#0056b3' : '#5a6268')};
    }

    &:active {
        transform: scale(0.95);
    }
`;

const CounterComponent = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: 'counter/increment' });
    const decrement = () => dispatch({ type: 'counter/decrement' });

    return (
        <Container>
            <CounterDisplay>Counter: {counter}</CounterDisplay>
            <ButtonContainer>
                <Button primary onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>Decrement</Button>
            </ButtonContainer>
        </Container>
    );
};

export default CounterComponent;
