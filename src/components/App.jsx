import { Route, Routes } from 'react-router';
import Header from './Header/Header';
// import Modal from './Modal/Modal';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      {/* <Modal /> */}
    </Routes>
  );
};

export default App;
