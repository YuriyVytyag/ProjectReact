import { HidePasswordIcon, PasswordButton, ShowPasswordIcon } from "./ShowPasswordButton.styled";

export const ShowPasswordButton = ({ handleClick, show }) => {
  return (
    <PasswordButton type="button" onClick={handleClick}>
      {show ? <ShowPasswordIcon /> : <HidePasswordIcon />}
    </PasswordButton>
  );
};