import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// Styled-Components
const FormContainer = styled.div`
  max-width: 400px;
  margin: 15px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledField = styled(Field)`
  width: 95%;
  padding: 10px;
  margin: 2px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 3px;
`;

const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Au moins 3 caractères').required('Requis'),
  email: Yup.string().email('Email invalide').required('Requis'),
  password: Yup.string().min(8, 'Au moins 8 caractères').required('Requis'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
    .required('Requis'),
});

// Component
const SignupForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <FormContainer>
      <h2>Inscription</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Nom d'utilisateur</label>
            <StyledField name="username" />
            <StyledError>
              <ErrorMessage name="username" />
            </StyledError>
          </div>
          <div>
            <label>Email</label>
            <StyledField name="email" type="email" />
            <StyledError>
              <ErrorMessage name="email" />
            </StyledError>
          </div>
          <div>
            <label>Mot de passe</label>
            <StyledField name="password" type="password" />
            <StyledError>
              <ErrorMessage name="password" />
            </StyledError>
          </div>
          <div>
            <label>Confirmation</label>
            <StyledField name="confirmPassword" type="password" />
            <StyledError>
              <ErrorMessage name="confirmPassword" />
            </StyledError>
          </div>
          <StyledButton type="submit">S'inscrire</StyledButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default SignupForm;
