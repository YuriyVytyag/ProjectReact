//import { AuthBackground } from 'components/AuthBackground';
import Loader from 'components/Loader/Loader';
import { FormLogin } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { LoginPage, TitleLogIn } from './loginPage.styled';

const Login = () => {
  const { isLoading } = useAuth();

  return (
    <>
    <LoginPage>
      <TitleLogIn>Login</TitleLogIn>
      <FormLogin />
      {/* {isLoading && <Loader />} */}
      </LoginPage>
      {/* // </AuthBackground> */}
      </>
  );
};

export default Login;
