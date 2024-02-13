import { useState } from "react";
import { createContext } from "react";
import * as authApi from "../../../api/auth";
import { storeToken, getToken, clearToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (user) => {
    const res = await authApi.login(user);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  return (
    <AuthContext.Provider value={{ register, login, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
