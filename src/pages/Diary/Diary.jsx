import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import styled from '@emotion/styled';

const Diary = () => {
  return (
    <StyledDiary>
      {/* Diari Form */}
      <RightSideBar />
    </StyledDiary>
  );
};

export default Diary;

const StyledDiary = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
