import { Formik, Form } from 'formik';
import { orange } from '@mui/material/colors';
// import { dailyRate } from 'redux/dailyRate/dailyRate-operations';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import {
  styled,
  useRadioGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField,
  FormControl,
} from '@mui/material';
import {
  FormWrapper,
  FormButton,
  Title,
  RadioWraper,
  MainWrap,
  LeftWrap,
  RightWrap,
  ButtonWrap,
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
    bloodType: 1,
  };

  // const [formData, setFormData] = useState(InitialValues);

  // const dispatch = useDispatch();

  // const handleSubmit = async (values, { resetForm }) => {
  //   const {bloodType, ...res} = values; 
  //   const newFormData = {
  //   ...res,
  //   bloodType: Number(bloodType),
  //  }
  //   setFormData(newFormData);
  //   dispatch(dailyRate(values))
  // };

  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Formik initialValues={InitialValues}>
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <MainWrap>
              <LeftWrap>
                <CssTextField
                  required
                  name="height"
                  label="Height"
                  type="number"
                  variant="standard"
                  value={values.height || ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <CssTextField
                  required
                  name="age"
                  label="Age"
                  type="number"
                  variant="standard"
                  value={values.age || ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <CssTextField
                  required
                  name="weight"
                  label="weight"
                  type="number"
                  variant="standard"
                  value={values.weight || ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </LeftWrap>
              <RightWrap>
                <CssTextField
                  required
                  name="desiredWeight"
                  label="desiredWeight"
                  type="number"
                  variant="standard"
                  value={values.desiredWeight || ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <RadioWraper>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Blood type*
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    row
                  >
                    <MyFormControlLabel value={1} label="1" onChange={handleChange} checked={values.bloodType === '1'} />
                    <MyFormControlLabel value={2} label="2" onChange={handleChange} checked={values.bloodType === '2'} />
                    <MyFormControlLabel value={3} label="3" onChange={handleChange} checked={values.bloodType === '3'} />
                    <MyFormControlLabel value={4} label="4" onChange={handleChange} checked={values.bloodType === '4'} />
                  </RadioGroup>
                  </FormControl>
                </RadioWraper>
              </RightWrap>
            </MainWrap>
            <ButtonWrap>
              <FormButton type="submit" variant="contained">
                Start losing weight
              </FormButton>
            </ButtonWrap>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
