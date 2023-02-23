import Login from 'pages/Login/LoginPage';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import Calculator from 'pages/Calculator/Calculator';
import Header from './components/Header/Header';
import RegistrationPage from './pages/RegistrationPage';
import Diary from 'pages/Diary/Diary';
import MainPage from 'pages/MainPage/MainPage';

const App = () => {
  return (
    <>
      <Header />
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
            element={<RestrictedRoute component={Login} redirectTo="/diary" />}
          />
          <Route
            path="/diary"
            element={<PrivateRoute component={Diary} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    </>
    // <Routes>
    //   <Route path="/" element={<Header />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<RegistrationPage />} />
    // </Routes>
  );
};

export default App;
