import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryDateCalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import { StyledDiary, DiaryWrapper } from './Diary.styled';

const Diary = () => {
  return (
    <StyledDiary>
      <DiaryWrapper>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </DiaryWrapper>
      <RightSideBar />
    </StyledDiary>
  );
};

export default Diary;
