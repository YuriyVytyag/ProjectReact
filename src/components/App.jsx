// import BasicModal from './Modal/Modal';
import MainPage from 'pages/MainPage/MainPage';
import { Route, Routes } from 'react-router';
import Header from './Header/Header';
// import { Suspense } from 'react';

const App = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Header />} /> {/* <Layout/> (в який входить Navigation, Logo, Header?) */}
      <Route index element={<MainPage />} /> {/* MainPage і CalculatePage це одна і таж форма? Куди RightBar*/}

      {/* <Route path="/" element={<PrivateRoute />}>
        <Route path="/diary" element={<Dairy />} />
        <Route path="/calculator" element={<Calculator />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Route> */}
      {/* <BasicModal /> */}
    </Routes>
    // </Suspense>
  );
};

export default App;
