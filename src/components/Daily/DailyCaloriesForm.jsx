import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { orange } from '@mui/material/colors';
import { dailyRate } from 'redux/dailyRate/dailyRate-operations';
import { dailyRateUserId } from 'redux/dailyDateUserId/dailyDateUserId-operations';
import { selectIsAuth } from 'redux/auth/auth-selectors';
import BasicModal from 'components/Modal/Modal';
import * as yup from 'yup';
import { selectUser } from 'redux/auth/auth-selectors';
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

let schema = yup.object().shape({
  height: yup.number().positive().required(),
  age: yup.number().positive().required(),
  weight: yup.number().positive().required(),
  desiredWeight: yup.number().positive().required(),
  bloodType: yup.string(),
});

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

const DailyCaloriesForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);
  const InitialValues = {
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: 1,
  };

  const handleSubmit = (values, { resetForm }) => {
  
    const { bloodType, ...res } = values;
    const newFormData = {
      ...res,
      bloodType: Number(bloodType),
    };
    localStorage.setItem('dailyRateData', JSON.stringify(newFormData));
    if(isLoggedIn) {
      dispatch(dailyRateUserId({ id: user.id, data: newFormData }))
    }else{
      dispatch(dailyRate(newFormData));
      setOpenModal(!openModal)
    }
    resetForm();
  };

  const handleCloseModal = () => {
      setOpenModal(!openModal);
  };

  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Formik
        initialValues={InitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, handleBlur, errors }) => (
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
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      sx={{ color: orange[600] }}
                    >
                      Blood type*
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="bloodType"
                      row
                    >
                      <MyFormControlLabel
                        value={1}
                        label="1"
                        onChange={handleChange}
                        checked={values.bloodType === '1'}
                      />
                      <MyFormControlLabel
                        value={2}
                        label="2"
                        onChange={handleChange}
                        checked={values.bloodType === '2'}
                      />
                      <MyFormControlLabel
                        value={3}
                        label="3"
                        onChange={handleChange}
                        checked={values.bloodType === '3'}
                      />
                      <MyFormControlLabel
                        value={4}
                        label="4"
                        onChange={handleChange}
                        checked={values.bloodType === '4'}
                      />
                    </RadioGroup>
                  </FormControl>
                </RadioWraper>
              </RightWrap>
            </MainWrap>
            <ButtonWrap>
              <FormButton
                type="submit"
                variant="contained"
              >
                Start losing weight
              </FormButton>
            </ButtonWrap>
          </Form>
        )}
      </Formik>
      {openModal && (
        <BasicModal
          open={openModal}
          onClose={handleCloseModal}
          setOpen={setOpenModal}
        />
      )}
    </FormWrapper>
  );
};


export default DailyCaloriesForm;