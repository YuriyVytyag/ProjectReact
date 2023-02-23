import { Route, Routes } from 'react-router';

import Login from './pages/Login';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default App;
