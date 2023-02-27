import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { searchProducts } from 'services.js/API';
import { useDispatch, useSelector } from 'react-redux';
import { selectDay } from 'redux/info/info-selectors';
import { addEatenProduct } from 'redux/info/info-operations';
import { FormStyled, AddButton, AddButtonDesktop, StyledField, StyledAutocomplete} from '../DiaryAddProductForm/DiaryAddProductForm.styled';

let productSchema = object({
    product: string(),
    weight: number(),
  });

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  bgcolor: 'background.paper',
  p: 4,
};

export default function DiaryProductFormMobile ({open, onClose, setOpen}) {
  const handleClose = () => setOpen(!open);
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      {({ values, handleChange, setFieldValue }) => (
        <FormStyled>
          <StyledAutocomplete
            disablePortal
            id="combo-box-demo"
            options={handleAutocomplete}
            sx={{ width: 240 }}
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
          <StyledField
            id="grams"
            placeholder="Grams"
            type="input"
            variant="standard"
            name="weight"
            value={values.weight}
            onChange={handleChange}
          />
          <AddButton type="submit">
            Add
          </AddButton>
          <AddButtonDesktop type="submit">
          +
        </AddButtonDesktop>
        </FormStyled>
      )}
    </Formik>
        </Box>
      </Modal>
    </div>
  );
}

