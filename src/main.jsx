import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import EmotionContextProvider from "./features/emotion/contexts/EmotionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <EmotionContextProvider>
      <App />
    </EmotionContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
