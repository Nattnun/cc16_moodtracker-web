import { useContext } from "react";
import { AuthContext } from "../features/auth/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectRoutes({ children }) {
  const { authUser } = useContext(AuthContext);
  return authUser ? children : <Navigate to="/" />;
}
