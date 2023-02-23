import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/auth-operations';
import { RegisterSchema } from 'utils/schemas/RegisterSchema';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  Title,
  FormList,
  FormItem,
  Label,
  Input,
  ButtonsContainer,
  FormReg,
  Wrap,
  MessageErr,
} from './RegistrationForm.styled';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
import { useTranslation } from 'react-i18next';

const FormError = ({ name }) => {
  const { t } = useTranslation();
  return (
    <ErrorMessage
      name={name}
      render={message => <MessageErr>{t(message)}</MessageErr>}
    />
  );
};

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const [showPassword, setShow] = useState(false);
  const handleClick = () => setShow(!showPassword);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Wrap>
          <Title>{t('header.signup2')}</Title>

          <FormReg autoComplete="off">
            <FormList>
              <FormItem>
                <Label htmlFor="username">{t('AuthForm.label_1')}</Label>
                <Input id="username" name="username" type="text" />
                <FormError name="username" component="p" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">{t('AuthForm.label_3')}</Label>
                <Input id="email" name="email" type="text" />
                <FormError name="email" component="p" />
              </FormItem>

              <FormItem>
                <Label htmlFor="password">{t('AuthForm.label_2')}</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'true' : 'password'}
                />
                <FormError name="password" component="p" />
                <ShowPasswordButton
                  handleClick={handleClick}
                  show={showPassword}
                />
              </FormItem>
            </FormList>
            <ButtonsContainer>
              <ButtonAuth text={t('header.buttonReg')} />
              <Link to="/login">
                <ButtonLinkAuth text={t('header.buttonLogin')} />
              </Link>
            </ButtonsContainer>
          </FormReg>
        </Wrap>
      </Formik>
    </>
  );
};
