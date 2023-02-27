import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled(Box)`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  padding-bottom: 100px;

  @media (min-width: 768px) {
    width: 670px;
    height: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 40px;
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  padding: 0;
  width: 210px;
  height: 43px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  background-color: #fc842d;
  color: white;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  :hover {
    background-color: white;
    color: #fc842d;
  }
`;
export const CloseButton = styled(Button)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding: 0;
    position: absolute;
    top: 20px;
    right: 20px;
    min-width: 24px;
    :hover {
    }
  }
`;
export const StyledTitle = styled(Typography)`
  display: block;
  padding: 0;
  padding-top: 12px;
  padding-bottom: 20px;
  border-top: 1px solid #e0e0e0;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
`;
export const StyledHeader = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  width: 325px;

  font-size: 26px;
  line-height: 36px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 140%;
  }
`;
export const Calories = styled.p`
  margin-top: 20px;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #264061;
`;
export const BackIcon = styled(Box)`
  position: absolute;
  top: -40px;
  height: 40px;
  width: inherit;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #eff1f3;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const BackBtn = styled.button`
  background-color: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
