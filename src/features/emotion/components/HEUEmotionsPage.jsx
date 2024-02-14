import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../contexts/EmotionContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HEUEmotionsPage() {
  const { getEmotionsByGroup, emotions, getEmotionById, feeling } =
    useContext(EmotionContext);
  const navigate = useNavigate();

  useEffect(() => {
    getEmotionsByGroup({ emotionalGroup: "HIGH_ENERGY_UNPLEASANT" });
  }, []);

  const handleClick = (e) => {
    getEmotionById(e.target.value);
    console.log(e.target.value);
    console.log("fromEmotions", feeling);
    navigate("/addEmotion/theme");
  };
  return (
    <div className="w-[430px] overflow-auto">
      <div className="grid grid-cols-6 gap-x-32 gap-y-2">
        {emotions?.map((el) => {
          return (
            <button
              key={el.id}
              onClick={handleClick}
              value={el.id}
              className="btn bg-angryRed w-[120px] h-[120px] flex justify-center items-center rounded-full"
            >
              {el.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
