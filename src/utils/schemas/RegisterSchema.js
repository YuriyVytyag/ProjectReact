import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'The name must be at least 3 to 15 characters')
    .max(15)
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid type of email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Invalid type of password ( password must be at least of 8 characters)')
    .max(100)
    .required('Password is required'),
});
