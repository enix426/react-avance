// TodoItem.js
import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.completed ? '#d4edda' : '#fff')};
  border: ${(props) => (props.completed ? '2px solid #28a745' : '2px solid #ccc')};
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  span {
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? '#6c757d' : '#333')};
    font-size: 1.1rem;
    cursor: pointer;
  }

  button {
    padding: 5px 10px;
    font-size: 0.9rem;
    color: white;
    background-color: #dc3545;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <TodoItemContainer completed={todo.completed}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </TodoItemContainer>
  );
};

export default TodoItem;
