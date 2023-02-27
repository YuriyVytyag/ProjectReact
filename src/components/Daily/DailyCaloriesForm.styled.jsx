import styled from '@emotion/styled';
import { Button, FormLabel, TextField, FormControlLabel } from '@mui/material';
import { orange } from '@mui/material/colors';

export const FormWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1280px) {
    margin-top: 140px;
  }
`;

export const Title = styled.h1`
  width: 280px;
  color: #212121;
  font-size: 18px;
  margin-bottom: 34px;
  @media (min-width: 768px) {
    width: 504px;
    font-size: 34px;
    margin-bottom: 68px;
  }
`;

export const FormButton = styled(Button)`
  text-transform: none;
  padding: 13px 25px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  line-height: 17px;
  width: 210px;
  background-color: #fc842d;
  &:hover,
  :focus {
    background-color: #f97619;
  }
`;

export const RadioWraper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const MainWrap = styled.div`
  margin-bottom: 40px;
  width: 240px;
  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
    margin-bottom: 60px;
    width: 100%;
  }
`;

export const LeftWrap = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'orange',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
});

export const StyledFormControlLabel = styled(props => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: orange[600],
  },
}));

export const StyledFormLabel = styled(FormLabel)({
  '&.MuiFormLabel-root.Mui-focused': {
    color: orange[600],
  },
});
