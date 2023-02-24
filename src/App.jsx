import Login from 'pages/Login/LoginPage';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy, Suspense } from 'react';
import CircularProgressWithLabel from 'components/Loader/Loader';

// import Calculator from 'pages/Calculator/Calculator';
import Header from './components/Header/Header';
import RegistrationPage from './pages/RegistrationPage';
import Diary from 'pages/Diary/Diary';
import MainPage from 'pages/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

const App = () => {


  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgressWithLabel />}>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegistrationPage}
                  redirectTo="/diary"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/diary" />
              }
            />
            <Route
              path="/diary"
              element={<PrivateRoute component={Diary} redirectTo="/login" />}
            />
            <Route
              path="/calculator"
              element={
                <PrivateRoute component={Calculator} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
