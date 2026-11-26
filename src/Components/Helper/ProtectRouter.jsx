import React from 'react';
import { UserContext, UserStorage } from '../../UserContext';
import { Navigate } from 'react-router-dom';
export const ProtectRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  // const userLogin = login ? { children } : <Navigate to="/login" />;
  if (login) {
    return children;
  } else if (!login) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};
