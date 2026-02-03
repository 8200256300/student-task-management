import { Navigate } from "react-router-dom";

const AuthGuard = ({ 
    children,
    required = true, 
    redirectTo = "/Login" 
}) => {
  const LoginData = JSON.parse(localStorage.getItem("loginData"));
  const isAuthenticated = !!LoginData;

  if (required && !isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!required && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthGuard;