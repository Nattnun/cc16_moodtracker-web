import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { Link } from "react-router-dom";

export default function GroupEmotionPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link to="/addEmotion/heuEmotions">
        <div className="btn bg-angryRed w-[148px] h-[148px] rounded-full flex justify-center items-center">
          <div className="text-center">HIGH ENERGY UNPLEASANT</div>
        </div>
      </Link>
      <div className="btn bg-happyYellow w-[148px] h-[148px] rounded-full flex justify-center items-center">
        <div className="text-center">HIGH ENERGY PLEASANT</div>
      </div>
      <div className="btn bg-sadBlue w-[148px] h-[148px] rounded-full flex justify-center items-center">
        <div className="text-center">LOW ENERGY UNPLEASANT</div>
      </div>
      <div className="btn bg-peaceGreen w-[148px] h-[148px] rounded-full flex justify-center items-center">
        <div className="text-center">LOW ENERGY PLEASANT</div>
      </div>
    </div>
  );
}
