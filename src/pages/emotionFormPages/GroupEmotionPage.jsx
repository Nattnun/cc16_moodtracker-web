import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { Link } from "react-router-dom";
import NavBar2 from "../../layouts/NavBar2";

export default function GroupEmotionPage() {
  return (
    <>
      <NavBar2 path={"/addEmotion"} />
      <div className="grid grid-cols-2 gap-4">
        <Link to="/addEmotion/heuEmotions">
          <div className="btn bg-angryRed w-[148px] h-[148px] rounded-full flex justify-center items-center">
            <div className="text-center">HIGH ENERGY UNPLEASANT</div>
          </div>
        </Link>
        <Link to="/addEmotion/hepEmotions">
          <div className="btn bg-happyYellow w-[148px] h-[148px] rounded-full flex justify-center items-center">
            <div className="text-center">HIGH ENERGY PLEASANT</div>
          </div>
        </Link>
        <Link to="/addEmotion/leuEmotions">
          <div className="btn bg-sadBlue w-[148px] h-[148px] rounded-full flex justify-center items-center">
            <div className="text-center">LOW ENERGY UNPLEASANT</div>
          </div>
        </Link>
        <Link to="/addEmotion/lepEmotions">
          <div className="btn bg-peaceGreen w-[148px] h-[148px] rounded-full flex justify-center items-center">
            <div className="text-center">LOW ENERGY PLEASANT</div>
          </div>
        </Link>
      </div>
    </>
  );
}
