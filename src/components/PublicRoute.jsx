import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/auth-selectors';

 const PublicRoute = ({ children, redirectTo = '/',  }) => {
  const  isLoggedIn  = useSelector(selectIsAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;