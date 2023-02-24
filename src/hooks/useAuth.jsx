import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoading,
  selectIsAuth,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsAuth),
  };
};
