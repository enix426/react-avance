import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";
import {
  FormContainer,
  StyledButton,
  StyledError,
  StyledField,
} from "./StyledComponent";

const StyledSimpleForm = () => {
  const initialValues = { username: "", email: "" };
  const handleSubmit = (values) => {
    alert(`Données soumises : ${JSON.stringify(values, null, 2)}`);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormContainer>
          <Form>
            <div>
              <label htmlFor="username">Nom d'utilisateur</label>
              <StyledField
                id="username"
                name="username"
                placeholder="Entrez votre nom"
              />
              <StyledError>
                <ErrorMessage name="username" />
              </StyledError>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <StyledField
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre email"
              />
              <StyledError>
                <ErrorMessage name="email" />
              </StyledError>
            </div>

            <StyledButton type="submit">S'inscrire</StyledButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default StyledSimpleForm;
