import styled from 'styled-components';

export const Form = styled.form`
  min-width: 350px;
  width: fit-content;
  border-radius: 20%;
  
`;

export const StyledFormButton = styled.button`
background-color: #FC842D;
`;



// import { Field, Form } from 'formik';
// import styled from '@emotion/styled';
// // import { theme } from '../Theme';

// export const FormLogIn = styled(Form)`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 76px;

//   @media screen and (min-width: 768px) {
//     align-items: start;
//     gap: 60px;
//   }
// `;
// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
 
//   width: 280px;
//   position: relative;
// `;

// export const Input = styled(Field)`
//   border: none;
//   border-bottom: 1px solid #e0e0e0;
 
//   width: 100%;
//   height: 20px;
//   @media screen and (min-width: 768px) {
//     max-width: 240px;
//   }
//    &:focus,
//   &:hover {
//     outline: none;
//   }
//   &:focus,
//   :hover {
//     border-bottom: 1px solid #fc842d;
//   }

//   &::-webkit-outer-spin-button,
//   ::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//   }
// `;

// export const ErrorText = styled.p`
//   color: red;
//   width: 100%;
//   text-align: justify;
// `;