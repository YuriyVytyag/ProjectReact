import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ErrorText = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
`;
const ErrorLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const StyledButton = styled.button`
  display: block;
  padding: 0;
  width: 210px;
  height: 43px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  background-color: #fc842d;
  color: white;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  :hover {
    background-color: white;
    color: #fc842d;
  }
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorText>
        Sorry, this page doesn't exist.
        <ErrorLink to="/">
          <StyledButton>Home</StyledButton>
        </ErrorLink>
      </ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
