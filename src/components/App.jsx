// import BasicModal from './Modal/Modal';
import MainPage from 'pages/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import Header from './Header/Header';
import { refreshUser } from 'redux/auth/auth-operations';
// import { Suspense } from 'react';
import { useEffect } from 'react';
const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
