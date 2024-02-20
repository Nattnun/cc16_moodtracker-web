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
import EmotionMemoPage from "../pages/emotionFormPages/EmotionMemoPage";
import ProfilePage from "../pages/utilsPages/ProfilePage";
import HEPEmotionsPage from "../features/emotion/components/HEPEmotionsPage";
import LEUEmotionsPage from "../features/emotion/components/LEUEmotionsPage";
import LEPEmotionsPage from "../features/emotion/components/LEPEmotionsPage";
import AnalyticContainer from "../pages/AnalyticPage/AnalyticContainer";
import TheEmotionPage from "../pages/emotionFormPages/TheEmotionPage";
import EditThemePage from "../pages/emotionFormPages/EditThemePage";
import EditMemoPage from "../pages/emotionFormPages/EditMemoPage";

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
    path: "/profile",
    element: (
      <ProtectRoutes>
        <ProfilePage />,
      </ProtectRoutes>
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
        path: "hepEmotions",
        element: <HEPEmotionsPage />,
      },
      {
        path: "leuEmotions",
        element: <LEUEmotionsPage />,
      },
      {
        path: "lepEmotions",
        element: <LEPEmotionsPage />,
      },
      {
        path: "theme",
        element: <EmotionThemePage />,
      },
      {
        path: "memo",
        element: <EmotionMemoPage />,
      },
    ],
  },
  {
    path: "/analytic",
    element: (
      <ProtectRoutes>
        <Container />,
      </ProtectRoutes>
    ),
    children: [
      {
        path: "",
        element: <AnalyticContainer />,
      },
      {
        path: "theEmotion",
        element: <TheEmotionPage />,
      },
      {
        path: "editTheme",
        element: <EditThemePage />,
      },
      {
        path: "editMemo",
        element: <EditMemoPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
