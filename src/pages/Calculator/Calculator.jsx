import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DailyCaloriesForm from 'components/Daily/DailyCaloriesForm';
import styled from '@emotion/styled';

const Calculator = () => {
  return (
    <StyledDiary>
      <DailyCaloriesForm />
      <RightSideBar />
    </StyledDiary>
  );
};

export default Calculator;

const StyledDiary = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
