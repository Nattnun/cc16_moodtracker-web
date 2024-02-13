import { useContext } from "react";
import { AuthContext } from "../features/auth/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuth({ children }) {
  const { authUser } = useContext(AuthContext);
  return authUser ? <Navigate to="/addEmotion" /> : children;
}
