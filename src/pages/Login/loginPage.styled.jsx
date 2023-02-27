import styled from '@emotion/styled';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-top: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 160px;
  }

`;

export const TitleLogIn = styled.h1`
  color: #FC842D;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;
