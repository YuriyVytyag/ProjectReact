import Login from 'pages/Login/LoginPage';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy, Suspense } from 'react';
import CircularProgressWithLabel from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Error from 'pages/ErrorPage/ErrorPage';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const Diary = lazy(() => import('pages/Diary/Diary'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
                <RestrictedRoute component={Login} redirectTo="/calculator" />
              }
            />
              <Route
              path="/calculator"
              element={
                <PrivateRoute component={Calculator} redirectTo="/login" />
              }
            />
            <Route
              path="/diary"
              element={<PrivateRoute component={Diary} redirectTo="/login" />}
            />
          </Route>
          <Route element={<Error />} path="*" />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
