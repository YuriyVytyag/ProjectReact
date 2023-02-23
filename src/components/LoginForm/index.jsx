import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup';
// import { FormLogIn, Input, Label, ErrorText } from './LoginForm.styled';
import { login } from 'redux/auth/auth-operations';
// import { ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
// import s from '../LoginForm/LoginForm.module.css';
import { Form, StyledFormButton } from './LoginForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p>{(message)}</p>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('validationRegisterForm.label2')
    .required('validationDiaryForm.label4'),
  password: yup
    .string()
    .min(3, 'validationDiaryForm.label3')
    .required('validationDiaryForm.label4'),
});

const initialValues = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const [showPassword, setShow] = useState(false);
  const handleClick = () => setShow(!showPassword);
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off" className={s.Form}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="55px"
            gridGap="40px"
          >
            <label htmlFor="email">
               {("AuthForm.label_3")}<Field type="email" name="email"></Field>
              <FormError name="email" component="p" />
            </label>
            <label htmlFor="password">
              {("AuthForm.label_2")}
              <Field
                name="password"
                type={showPassword ? 'true' : 'password'}
              ></Field>
              <FormError name="password" component="p" />
              <ShowPasswordButton
                handleClick={handleClick}
                show={showPassword}
              />
            </label>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            gridGap={['20px', '32px']}
          >
            <StyledFormButton type='submit' className={s.btnLogin}>Log In</StyledFormButton>
            <Link to="/registration">
              <button className={s.btnRef}></button>
            </Link>
          </Box>
        </Form>
      </Formik>
    </>
  );
};