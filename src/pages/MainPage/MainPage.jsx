import DailyCaloriesForm from 'components/Daily/DailyCaloriesForm';
import { AuthBackground } from 'components/AuthBackground';
import { selectIsAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const isLoggedIn = useSelector(selectIsAuth);
  return (
    <>
      <DailyCaloriesForm />
      {!isLoggedIn && (
        <>
        <AuthBackground/>
        </>
      )}
    </>
  );
};

export default MainPage;
