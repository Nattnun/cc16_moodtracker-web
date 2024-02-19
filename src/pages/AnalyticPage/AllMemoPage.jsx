import React from "react";
import { useContext } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllMemoPage() {
  const { authUser } = useContext(AuthContext);
  const { getAllMemo, allMemo, getSelectedMemo } =
    useContext(MemoContext);

  const navigate = useNavigate();

  useEffect(() => {
    getAllMemo(authUser.id);
  }, []);
  //   console.log("analytic", allMemo);

  const handleClick = async (e) => {
    console.log("id", e.target.value);
    await getSelectedMemo(e.target.value);
    navigate("/analytic/theEmotion");
  };

  return (
    <div className="min-h-screen w-[430px] mx-auto">
      <h3 className="text-2xl font-semibold text-center px-8">
        All the emotion you feel
      </h3>
      <div className="h-[2rem]"></div>
      {allMemo.length == 0 ? (
        <div className="text-center">you don't have any Memo yet</div>
      ) : (
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
              <button
                key={el.id}
                value={el.id}
                onClick={handleClick}
                className={`btn w-[80px] h-[80px] text-xs flex items-center justify-center rounded-full bg-${Color()}`}
              >
                {el.emotion.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
