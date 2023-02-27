import styled from 'styled-components';

export const StyledDiary = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const DiaryWrapper = styled.div`
  margin-top: 40px;
  /* margin-left: 20px; */
  @media screen and (max-width: 767px) {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-left: 32px;
    margin-bottom: 55px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 150px;
    margin-left: 16px;
    margin-bottom: 56px;
  }
`;

export const MobileButton = styled.button`
  margin-top: 60px;
  margin-bottom: 20px;
  width: 48px;
  height: 48px;
  background: #fc842d;
  color: #ffffff;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
