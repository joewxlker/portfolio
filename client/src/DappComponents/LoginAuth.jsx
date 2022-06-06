import { Navigate } from "react-router-dom";

const useWithAuth = (Component) => {

  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem('token');
    if (isAuth) {
      return <Component />;
    } else {
      return <Navigate to="/Login" />;
    }
  };
  
    return AuthRoute;
};
  
export default useWithAuth