import { Route, Routes } from 'react-router';
import Header from './Header/Header';
// import Modal from './Modal/Modal';
import MainPage from 'pages/MainPage/MainPage';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route index element={<MainPage />} />
      {/* <Modal /> */}
    </Routes>
    
   
  );
};

export default App;
