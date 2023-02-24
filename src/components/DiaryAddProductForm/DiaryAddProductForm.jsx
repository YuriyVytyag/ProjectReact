import css from '../DiaryAddProductForm/DiaryAddProductForm.module.css';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useState, useEffect } from 'react';
// import Stack from '@mui/material/Stack';
import { Formik, Form, Field } from 'formik';
import { object, string, number } from 'yup';
// import { searchProducts } from 'services.js/API';
// import { useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/auth-selectors';

let productSchema = object({
  product: string().required(),
  weight: number().required().positive().integer(),
});

export default function DiaryAddProductForm() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch;
  // const [products, setProducts] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get('search') ?? '';

  // console.log(user);

  const initialValue = {
    product: '',
    weight: '',
  };

  const handleChange = event => {
    // dispatch();
    const search = event.target.value;
    // console.log(search);
    return search;
  };

  // useEffect(() => {
  //   // if (search === '') {
  //   //   return;
  //   // }
  //   console.log('hagl');
  //   searchProducts('Меланж').then(response => {
  //     console.log(response);
  //     const products = response[0].title ? response : [];
  //     console.log(products);
  //     // setProducts(response.data);
  //   });
  // }, []);

  const handleSubmit = (value, { resetForm }) => {
    // const newProduct = {
    //   product: value.product,
    //   weight: value.weight,
    // };
    // console.log(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      <Form autoComplete="off">
        {/* <Autocomplete
          id="auto-complete"
          sx={{ width: 300 }}
          autoComplete
          includeInputInList
          renderInput={params => (
            <TextField
              {...params}
              onChange={handleChange}
              label="Enter product name"
              variant="standard"
              name="product"
            />
          )}
        /> */}
        <Field
          className={css.input__product}
          name="product"
          type="text"
          placeholder="Enter product name"
          onChange={handleChange}
        />
        {/* <ErrorMessage name="product" component="div" /> */}
        <Field
          className={css.input__grams}
          name="weight"
          type="number"
          placeholder="Grams"
        />
        {/* <ErrorMessage name="weight" component="div" /> */}
        <button className={css.button__mobile} type="submit">
          Add
        </button>
        <button className={css.button} type="submit">
          +
        </button>
      </Form>
    </Formik>
  );
}
