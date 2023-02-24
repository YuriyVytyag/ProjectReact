import CircularProgressWithLabel from '../Loader/Loader';

import * as React from 'react';
import { Modal } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {
  StyledButton,
  CloseButton,
  StyledTitle,
  StyledHeader,
  Wrapper,
  Calories,
  BackIcon,
  BackBtn,
} from './Modal.styled';

const style = {
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>Start losing weight</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Wrapper sx={style}>
          <CircularProgressWithLabel />
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
          <Calories>2800 ккал</Calories>
          <StyledTitle id="modal-modal-description" sx={{ mt: 2 }}>
            Foods you should not eat
          </StyledTitle>
          <ol>
            <li>Flour products</li>
            <li>Milk</li>
            <li>Red meat</li>
            <li>Smoked meats</li>
          </ol>
          <StyledButton>Start losing weight</StyledButton>
        </Wrapper>
      </Modal>
    </div>
  );
}
