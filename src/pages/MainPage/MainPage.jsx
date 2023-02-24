import DailyCaloriesForm from 'components/Daily/DailyCaloriesForm';
import ImgDesctop from '../../assets/images/destop.png';
import ImgTab from '../../assets/images/tablet.png';
import { DesctopImg, TabletImg } from './MainPage.styled';
import { selectIsAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const isLoggedIn = useSelector(selectIsAuth);
  return (
    <>
      <DailyCaloriesForm />
      {!isLoggedIn && (
        <>
          <DesctopImg src={ImgDesctop} />
          <TabletImg src={ImgTab} />
        </>
      )}
    </>
  );
};

export default MainPage;
