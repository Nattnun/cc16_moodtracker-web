import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import AllMemoPage from "./AllMemoPage";
import BreakDownMemoPage from "./BreakDownMemoPage";
import MostEmotionPage from "./MostEmotionPage";
import EmotionsOnDay from "./EmotionsOnDay";
import EmotionOnWeek from "./EmotionOnWeek";
import ThemeTagsPage from "./ThemeTagsPage";
import PlaceTagsPage from "./PlaceTagsPage";
import PeopleTagsPage from "./PeopleTagsPage";

export default function AnalyticContainer() {
  return (
    <div>
      <NavBar />
      <div className="h-screen">
        <BreakDownMemoPage />
        <AllMemoPage />
        <MostEmotionPage />
        <EmotionsOnDay />
        <EmotionOnWeek />
        <ThemeTagsPage />
        <PlaceTagsPage />
        <PeopleTagsPage />
      </div>
      <Footer />
    </div>
  );
}
