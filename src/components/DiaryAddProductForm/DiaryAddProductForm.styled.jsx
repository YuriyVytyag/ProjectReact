import styled from 'styled-components';
import { Form, Field } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';

export const FormStyled = styled(Form)`
  @media (max-width: 767px) {
    display: none;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    display: flex;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const StyledAutocomplete = styled(Autocomplete)`
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        width: 280px;
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid #E0E0E0;
    }
    @media (min-width: 768px) {
        .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        width: 240px;
        }
    } 
`

export const StyledField = styled(Field)`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  padding-bottom: 8px;
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
  @media (max-width: 767px) {
    margin-top: 32px;
    margin-bottom: 60px;
  }
  @media (min-width: 768px) {
    width: 106px;
    padding-bottom: 20px;
    margin-left: 22px;
  }
  &::placeholder {
    text-align: end;
  }
  @media (min-width: 1280px) {
    width: 107px;
    margin-left: 48px;
  }
`;

export const AddButton = styled.button`
  @media (max-width: 767px) {
    width: 176px;
    height: 44px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    background: #fc842d;
    border-radius: 30px;
    border: none;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const AddButtonDesktop = styled.button`
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    margin-left: 87px;
    width: 48px;
    height: 48px;
    background: #fc842d;
    color: #ffffff;
    border-radius: 50%;
    border: none;
    font-weight: bold;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media (min-width: 1280px) {
    margin-left: 60px;
  }
`;
