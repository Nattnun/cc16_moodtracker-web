import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { Link } from "react-router-dom";
import CheckIcon from "../../components/icons/CheckIcon";
import TextAreaInput from "../../components/TextAreaInput";

export default function EmotionMemoPage() {
  const { feeling } = useContext(EmotionContext);

  const Color = () => {
    if (feeling.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "angryRed";
    }
    if (feeling.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "happyYellow";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "sadBlue";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "peaceGreen";
    }
  };
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div
        className={`w-[364px] h-[364px] bg-${Color()} flex justify-center items-center rounded-full`}
      >
        <TextAreaInput
          placeholder={`Describe what might be causing you feel ${feeling.name}...`}
        />
      </div>
      <Link to="/addEmotion/memo">
        <button
          className={`btn w-[52px] h-[52px] flex justify-center items-center bg-${Color()} rounded-full`}
        >
          <CheckIcon />
        </button>
      </Link>
      <div className="w-[100px] h-[100px]"></div>
    </div>
  );
}
