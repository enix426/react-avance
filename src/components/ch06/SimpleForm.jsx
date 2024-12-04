import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';

const SimpleForm = () => {
  const initialValues = { username: '', email: '' };
  const handleSubmit = (values) => {
    alert(`Données soumises : ${JSON.stringify(values, null, 2)}`);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <Field id="username" name="username" placeholder="Entrez votre nom" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="Entrez votre email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">S'inscrire</button>
        </Form>
    </Formik>
  );
};

export default SimpleForm;
