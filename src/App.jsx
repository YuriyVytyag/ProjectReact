import Login from 'pages/Login/LoginPage';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import MainPage from 'pages/MainPage/MainPage';
import RegistrationPage from './pages/RegistrationPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} >
      <Route index element={<MainPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
