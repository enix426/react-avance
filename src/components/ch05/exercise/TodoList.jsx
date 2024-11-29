// TodoList.js
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
`;

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
