import css from '../DiaryAddProductForm/DiaryAddProductForm.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, number } from 'yup';
import { searchProducts } from 'services.js/API';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { selectDay } from 'redux/info/info-selectors';
import { addEatenProduct } from 'redux/info/info-operations';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
let productSchema = object({
  product: string(),
  weight: number(),
});

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const day = useSelector(selectDay);

  const initialValue = {
    id: null,
    weight: '',
  };

  const handleChangeInput = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    searchProducts(query).then(response => {
      const products = response[0].title ? response : [];
      setProducts(products);
    });
  }, [query]);

  const handleAutocomplete = products.map(product => {
    return {
      label: product.title.ua,
      id: product._id,
    };
  });

  const handleSubmit = (values, { resetForm }) => {
    const productData = {
      date: day.date,
      productId: values.id,
      weight: Number(values.weight),
    };
    if (!productData.productId) {
      resetForm();
      return;
    }
    dispatch(addEatenProduct(productData));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={handleAutocomplete}
            sx={{ width: 300 }}
            value={values.name}
            onChange={(event, newValue) => {
              handleChange(event);
              if (!newValue) {
                return;
              }
              setFieldValue('id', newValue.id);
            }}
            renderInput={params => (
              <TextField
                type="input"
                onChange={handleChangeInput}
                {...params}
                label="Enter product name"
                name="name"
                id="name"
              />
            )}
          />
          <TextField
            id="grams"
            label="Grams"
            type="input"
            variant="standard"
            name="weight"
            value={values.weight}
            onChange={handleChange}
          />
          <button className={css.button__mobile} type="submit">
            Add
          </button>
          {/* <button className={css.button} type="submit">
            +
          </button> */}
          <Fab type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Form>
      )}
    </Formik>
  );
}
