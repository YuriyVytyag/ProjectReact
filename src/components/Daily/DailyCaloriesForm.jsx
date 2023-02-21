import { Formik, Form } from 'formik';
import { orange } from '@mui/material/colors';
import {
  styled,
  useRadioGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField
} from '@mui/material';
import {
  FormWrapper,
  FormButton,
  Title,
  RadioWraper,
  MainWrap,
  LeftWrap,
  RightWrap,
  ButtonWrap
} from './DailyCaloriesForm.styled';

const CssTextField = styled(TextField)({
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
  

const StyledFormControlLabel = styled(props => <FormControlLabel {...props} />)(
  ({ checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: orange[600],
    },
  })
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return (
    <StyledFormControlLabel
      checked={checked}
      control={
        <Radio
          sx={{
            '&.Mui-checked': {
              color: orange[600],
            },
          }}
        />
      }
      {...props}
    />
  );
}

export const DailyCaloriesForm = () => {
  const InitialValues = {
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '',
  };

  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Formik initialValues={InitialValues}>
        <Form>
          <MainWrap>
            <LeftWrap>
              <CssTextField
                required
                name="height"
                label="Height"
                type="number"
                variant="standard"
              />
              <CssTextField
                required
                name="age"
                label="Age"
                type="number"
                variant="standard"
              />
              <CssTextField
                required
                name="currentWeight"
                label="Current weight"
                type="number"
                variant="standard"
              />
            </LeftWrap>
            <RightWrap>
              <CssTextField
                required
                name="desiredWeight"
                label="Desired weight"
                type="number"
                variant="standard"
              />
              <RadioWraper>
                <FormLabel id="demo-radio-buttons-group-label">
                  Blood type*
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="radio-buttons-group"
                  label="Blood type"
                  row
                >
                  <MyFormControlLabel value="1" label="1" />
                  <MyFormControlLabel value="2" label="2" />
                  <MyFormControlLabel value="3" label="3" />
                  <MyFormControlLabel value="4" label="4" />
                </RadioGroup>
              </RadioWraper>
            </RightWrap>
          </MainWrap>
          <ButtonWrap>
            <FormButton type="submit" variant="contained">
              Start losing weight
            </FormButton>
          </ButtonWrap>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
