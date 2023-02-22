import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router";
import { selectIsAuth} from "redux/auth/auth-selectors";

const PrivateRoute = () => {
    const isLoggedIn = useSelector(selectIsAuth);
    return isLoggedIn? <Outlet/> : <Navigate to='/login' />;
}

export default PrivateRoute;