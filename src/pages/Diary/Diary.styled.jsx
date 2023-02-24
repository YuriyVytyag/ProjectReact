import styled from "styled-components";

export const StyledDiary = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const DiaryWrapper = styled.div`
  margin-top:40px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-left: 32px;
    margin-bottom: 55px
  }
  @media screen and (min-width: 1280px) {
    margin-top: 150px;
    margin-left: 16px;
    margin-bottom: 56px
  }
`;