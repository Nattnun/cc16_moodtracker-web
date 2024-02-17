import React from "react";
import Footer from "../../layouts/Footer";
import AllMemoPage from "./AllMemoPage";
import BreakDownMemoPage from "./BreakDownMemoPage";
import MostEmotionPage from "./MostEmotionPage";
import EmotionsOnDay from "./EmotionsOnDay";
import EmotionOnWeek from "./EmotionOnWeek";

export default function AnalyticContainer() {
  return (
    <div>
      <div className="h-screen">
        <BreakDownMemoPage />
        <AllMemoPage />
        <MostEmotionPage />
        <EmotionsOnDay />
        <EmotionOnWeek />
      </div>
      <Footer />
    </div>
  );
}
