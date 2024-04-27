import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}
interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return isLoggedIn ? <>{children}</> : <Navigate to="/loginPage" />;
};

export default PrivateRoute;
