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
  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
}
