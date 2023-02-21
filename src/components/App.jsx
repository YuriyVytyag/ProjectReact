// import BasicModal from './Modal/Modal';

import { Route, Routes } from 'react-router';
import Header from './Header/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      {/* <BasicModal /> */}
    </Routes>
  );
};

export default App;
