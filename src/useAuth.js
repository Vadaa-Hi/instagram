import React from 'react';

export const AuthContext = React.createContext();

function useAuth() {
  const auth = React.useContext(AuthContext);

  return auth;
}
export default useAuth;
