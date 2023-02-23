// import BasicModal from './Modal/Modal';
import MainPage from 'pages/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import Header from './Header/Header';
import { refreshUser } from 'redux/auth/auth-operations';
import { FormLogin } from './LoginForm/LoginForm';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
   <FormLogin/>
  );
};

export default App;
