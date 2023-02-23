import Login from 'pages/Login/LoginPage';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationPage />} />

    </Routes>
  );
};

export default App;
