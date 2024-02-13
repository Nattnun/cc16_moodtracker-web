import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddEmotionPage from "../pages/AddEmotionPage";
import RedirectIfAuth from "./RedirectIfAuth";
import ProtectRoutes from "./ProtectRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuth>
        <LoginPage />,
      </RedirectIfAuth>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuth>
        <RegisterPage />,
      </RedirectIfAuth>
    ),
  },
  {
    path: "/addEmotion",
    element: (
      <ProtectRoutes>
        <AddEmotionPage />,
      </ProtectRoutes>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
