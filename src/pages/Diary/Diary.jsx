import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryDateCalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductFormMobile from 'components/DiaryAddProductFormMobile/DiaryAddProductFormMobile';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import { StyledDiary, DiaryWrapper, MobileButton } from './Diary.styled';
import { useState } from 'react';
const Diary = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <StyledDiary>
      <DiaryWrapper>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
        <MobileButton type="button" onClick={handleOpen}>
          +
        </MobileButton>
      </DiaryWrapper>
      <RightSideBar />
      {open && (
        <DiaryProductFormMobile
          open={open}
          onClose={handleClose}
          setOpen={setOpen}
        />
      )}
    </StyledDiary>
  );
};

export default Diary;
