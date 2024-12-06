import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  color: #333;
`;

export const FormContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FieldGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #444;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  textarea {
    resize: none;
    height: 80px;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const StyledButton = styled(Button)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 15px;
    margin-bottom: 10px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #007bff;
    }

    p {
      margin: 5px 0;
      color: #555;
    }

    i {
      font-size: 0.9rem;
      color: #888;
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
`;