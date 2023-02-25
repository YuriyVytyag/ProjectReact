import { Field, Form } from 'formik';
import styled from '@emotion/styled';

export const FormLogIn = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 76px;

  @media screen and (min-width: 768px) {
    align-items: start;
    gap: 60px;
    margin-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #9B9FAA;
  font-size: 14px;
  font-weight: 700;
  width: 280px;
  position: relative;
`;

export const Input = styled(Field)`
  
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline-color: #FC842D;
  width: 100%;
  height: 20px;

  @media screen and (min-width: 768px) {
    max-width: 240px;
  }
   &:focus,
  &:hover {
    outline: none;
  }
  &:focus,
  :hover {
    border-bottom: 1px solid #fc842d;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ErrorText = styled.p`
color: red;
width: 250px;
text-align: justify;
font-weight: 700;
font-size: 14px;
`;
