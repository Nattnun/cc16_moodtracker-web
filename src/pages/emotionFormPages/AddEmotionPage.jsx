import React from "react";
import PlusIcon from "../../components/icons/PlusIcon";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import NavBar from "../../layouts/NavBar";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { useEffect } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useState } from "react";

export default function AddEmotionPage() {
  const { authUser } = useContext(AuthContext);
  const { getLatestMemo, latestMemo, emotionMemo, setEmotionMemo } =
    useContext(MemoContext);
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    setEmotionMemo({ ...emotionMemo, userId: authUser.id });
    getLatestMemo(authUser.id);
    // console.log("authuserId", authUser.id);
    // console.log("latestMemo", latestMemo);
  }, []);

  useEffect(() => {
    // console.log("Latest Memo", latestMemo);
    let color = Color();
    setCurrentColor(color);
  }, [latestMemo]);

  // console.log(authUser);
  // console.log("outside", latestMemo);
  // console.log("data", latestMemo.data.emotion?.emotionalGroup);

  function Color() {
    if (latestMemo.data?.emotion.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "angryRed";
    }
    if (latestMemo.data?.emotion.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "happyYellow";
    }
    if (latestMemo.data?.emotion.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "sadBlue";
    }
    if (latestMemo.data?.emotion.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "peaceGreen";
    }
  }

  // console.log("color", Color());

  return (
    <div className=" h-full  flex flex-col justify-center items-center gap-8">
      <NavBar />
      <div className=" text-5xl">{authUser.displayName}</div>
      <div className=" text-3xl">WHAT DO YOU FEEL</div>
      <div
        className={`w-[288px] h-[288px] rounded-full flex justify-center items-center ${
          currentColor ? `bg-${currentColor}` : "bg-gray-300"
        }`}
      >
        <div className=" w-[238px] h-[238px] bg-white rounded-full flex justify-center items-center">
          <Link to="/addEmotion/emotionGroup">
            <PlusIcon className="btn bg-transparent border-none shadow-none scale-150 hover:bg-transparent" />
          </Link>
        </div>
      </div>
      <div className=" text-5xl invisible ">{authUser.displayName}</div>
      <div className=" text-3xl invisible">WHAT DO YOU FEEL</div>
      <Footer />
    </div>
  );
}
