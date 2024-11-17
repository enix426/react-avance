import { Field } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
`;

export const StyledField = styled(Field)`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledError = styled.div`
  color: red;
  font-size: 12px;
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
