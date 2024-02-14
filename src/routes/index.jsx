import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/authPages/LandingPage";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import AddEmotionPage from "../pages/emotionFormPages/AddEmotionPage";
import RedirectIfAuth from "./RedirectIfAuth";
import ProtectRoutes from "./ProtectRoutes";
import Container from "../layouts/Container";
import GroupEmotionPage from "../pages/emotionFormPages/GroupEmotionPage";
import HEUEmotionsPage from "../features/emotion/components/HEUEmotionsPage";
import EmotionThemePage from "../pages/emotionFormPages/EmotionThemePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuth>
        <LandingPage />,
      </RedirectIfAuth>
    ),
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
        <Container />,
      </ProtectRoutes>
    ),
    children: [
      {
        path: "",
        element: <AddEmotionPage />,
      },
      {
        path: "emotionGroup",
        element: <GroupEmotionPage />,
      },
      {
        path: "heuEmotions",
        element: <HEUEmotionsPage />,
      },
      {
        path: "theme",
        element: <EmotionThemePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
