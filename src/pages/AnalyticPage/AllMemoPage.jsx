import React from "react";
import { useContext } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { useState } from "react";

export default function AllMemoPage() {
  const { authUser } = useContext(AuthContext);
  const { getAllMemo, allMemo } = useContext(MemoContext);

  useEffect(() => {
    getAllMemo(authUser.id);
  }, []);
  //   console.log("analytic", allMemo);

  return (
    <div className="min-h-screen w-[430px] mx-auto">
      <h3 className="text-2xl font-semibold text-center px-8">
        All the emotion you feel
      </h3>
      <div className="h-[2rem]"></div>
      <div className="grid grid-cols-4 gap-4 mx-8">
        {allMemo.map((el) => {
          function Color() {
            if (el.emotion.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
              return "angryRed";
            }
            if (el.emotion.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
              return "happyYellow";
            }
            if (el.emotion.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
              return "sadBlue";
            }
            if (el.emotion.emotionalGroup === "LOW_ENERGY_PLEASANT") {
              return "peaceGreen";
            }
          }
          return (
            <div
              key={el.id}
              className={`w-[80px] h-[80px] text-xs flex items-center justify-center rounded-full bg-${Color()}`}
            >
              {el.emotion.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
