// TodoInput.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task.trim());
      setTask('');
    }
  };

  return (
    <TodoForm onSubmit={handleAddTodo}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <AddButton type="submit">Add</AddButton>
    </TodoForm>
  );
};

export default TodoInput;
