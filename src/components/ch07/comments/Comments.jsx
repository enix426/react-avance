import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Title,
  FormContainer,
  FieldGroup,
  Error,
  Button,
  CommentList,
} from './Comments.styles';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    axios.post('https://jsonplaceholder.typicode.com/comments', values)
      .then((response) => {
        setComments([response.data, ...comments]);
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nom requis'),
    email: Yup.string().email('Email invalide').required('Email requis'),
    body: Yup.string().required('Commentaire requis'),
  });

  if (loading) return <Container>Chargement des commentaires...</Container>;
  if (error) return <Container>Erreur : {error}</Container>;

  return (
    <Container>
      <Title>Commentaires</Title>
      <FormContainer>
        <Formik
          initialValues={{ name: '', email: '', body: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <FieldGroup>
                <label>Nom :</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component={Error} />
              </FieldGroup>
              <FieldGroup>
                <label>Email :</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component={Error} />
              </FieldGroup>
              <FieldGroup>
                <label>Commentaire :</label>
                <Field as="textarea" name="body" />
                <ErrorMessage name="body" component={Error} />
              </FieldGroup>
              <Button type="submit" disabled={isSubmitting}>
                Ajouter
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
      <CommentList>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p><i>{comment.email}</i></p>
          </li>
        ))}
      </CommentList>
    </Container>
  );
};

export default Comments;