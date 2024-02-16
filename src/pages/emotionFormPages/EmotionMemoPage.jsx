import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { Link } from "react-router-dom";
import CheckIcon from "../../components/icons/CheckIcon";
import TextAreaInput from "../../components/TextAreaInput";
import NavBar2 from "../../layouts/NavBar2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { AuthContext } from "../../features/auth/contexts/AuthContext";

export default function EmotionMemoPage() {
  const { authUser } = useContext(AuthContext);
  const { feeling } = useContext(EmotionContext);
  const { emotionMemo, setEmotionMemo, createEmotionMemo, getLatestMemo } =
    useContext(MemoContext);

  const navigate = useNavigate();

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

  const handleOnChange = (e) => {
    setEmotionMemo({ ...emotionMemo, memo: e.target.value });
  };

  const handleSubmit = async () => {
    await createEmotionMemo(emotionMemo);
    navigate("/addEmotion");
  };

  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <NavBar2 path={"/addEmotion/theme"} />
      <div
        className={`w-[364px] h-[364px] bg-${Color()} flex justify-center items-center rounded-full`}
      >
        <TextAreaInput
          placeholder={`Describe what might be causing you feel ${feeling.name}...`}
          onChange={handleOnChange}
          value={emotionMemo.memo}
        />
      </div>
      <button
        onClick={handleSubmit}
        className={`btn w-[52px] h-[52px] flex justify-center items-center bg-${Color()} rounded-full`}
      >
        <CheckIcon />
      </button>
      <div className="w-[100px] h-[100px]"></div>
    </div>
  );
}
