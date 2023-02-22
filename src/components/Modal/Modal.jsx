// import { Box, Button, Fab } from '@mui/material';
// import { Add as AddIcon } from '@mui/icons-material';

// const Modal = () => {
//   return (
//     <Box bgcolor="#FC842D">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//       <Fab aria-label="add">
//         <AddIcon />
//       </Fab>
//     </Box>
//   );
// };

// export default Modal;

import * as React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  StyledButton,
  CloseButton,
  StyledTitle,
  StyledHeader,
  Wrapper,
  Calories,
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
