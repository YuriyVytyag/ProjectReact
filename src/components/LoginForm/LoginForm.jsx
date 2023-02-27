import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormLogIn, Input, Label, ErrorText } from './LoginForm.styled';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
import { login } from '../../redux/auth/auth-operations';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid type of email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Invalid type of password ( password must be at least of 8 characters)')
    .required('Password is required'),
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
        <FormLogIn autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="55px"
            gridGap="40px"
          >
            <Label htmlFor="email">
              {'Email *'}
              <Input type="email" name="email"></Input>
              <FormError name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              {'Password *'}
              <Input
                name="password"
                type={showPassword ? 'true' : 'password'}
              ></Input>
              <FormError name="password" component="p" />
              <ShowPasswordButton
                handleClick={handleClick}
                show={showPassword}
              />
            </Label>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            gridGap={['20px', '32px']}
          >
            <ButtonAuth text={'Log in'}></ButtonAuth>
            <Link to="/register">
              <ButtonLinkAuth text={'Register'}></ButtonLinkAuth>
            </Link>
          </Box>
        </FormLogIn>
      </Formik>
    </>
  );
};
