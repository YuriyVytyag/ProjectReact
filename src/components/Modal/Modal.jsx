import * as React from 'react';
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';

import { Close as CloseIcon } from '@mui/icons-material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useSelector } from 'react-redux';
import {
  selectKcal,
  selectNotAllowedProducts,
} from 'redux/dailyRate/dailyRate-selectors';

// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { dailyRate } from 'redux/dailyRate/dailyRate-operations';

import {
  StyledButton,
  CloseButton,
  StyledTitle,
  StyledHeader,
  Wrapper,
  Calories,
  BackIcon,
  BackBtn,
  Container,
} from './Modal.styled';

const style = {
  p: 4,
};

export default function BasicModal({ open, onClose, setOpen }) {
  const handleClose = () => setOpen(!open);
  const calories = useSelector(selectKcal);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const products = notAllowedProducts.slice(0, 4);

  // const[respons, setRespons] = useState();
  // const dispatch = useDispatch();

  //  useEffect(()=>{
  // dispatch(dailyRate(value))
  //  }, [dispatch])

  return (
    <Container>
      <Modal
        open={open}
        // onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Wrapper sx={style}>
          <BackIcon>
            <BackBtn type="button" onClick={handleClose}>
              <KeyboardReturnIcon />
            </BackBtn>
          </BackIcon>
          <CloseButton onClick={handleClose}>
            <CloseIcon sx={{ fill: 'black' }} />
          </CloseButton>
          <StyledHeader id="modal-modal-title">
            Your recommended daily calorie intake is
          </StyledHeader>
          <Calories>{calories} ккал</Calories>
          <StyledTitle id="modal-modal-description" sx={{ mt: 2 }}>
            Foods you should not eat
          </StyledTitle>
          <ol>
            {products.map(product => {
              return <li key={product}>{product}</li>;
            })}
          </ol>
          <Link to="/register">
            <StyledButton>Start losing weight</StyledButton>
          </Link>
        </Wrapper>
      </Modal>
    </Container>
  );
}
