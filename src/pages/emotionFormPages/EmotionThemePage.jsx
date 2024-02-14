import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { useEffect } from "react";

export default function EmotionThemePage() {
  const { feeling } = useContext(EmotionContext);
  useEffect(() => {
    console.log("feeling-fromTheme", feeling);
    console.log("feeling-fromTheme", feeling.emotionalGroup);
  });

  const textDefault = "text-4xl font-semibold";
  const textColor = () => {
    if (feeling.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return " text-angryRed";
    }
    if (feeling.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return " text-happyYellow";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return " text-sadBlue";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return " text-peaceGreen";
    }
  };
  return (
    <div>
      <div className="text-3xl mx-4 font-medium">
        What were you doing when you felt
        <span className={`${textDefault} ${textColor()}`}>
          {" "}
          {feeling?.name}
        </span>
      </div>
      <div>Theme</div>
      <div>Place</div>
      <div>People</div>
    </div>
  );
}
