// TodoApp.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f3f4f7, #e3e6ed);
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #666;
`;

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (task) => dispatch(addTodo(task));
  const handleToggleTodo = (id) => dispatch(toggleTodo(id));
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));

  return (
    <AppContainer>
      <Title>To-Do App</Title>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      <Footer>Manage your tasks with Redux Toolkit</Footer>
    </AppContainer>
  );
};

export default TodoApp;
