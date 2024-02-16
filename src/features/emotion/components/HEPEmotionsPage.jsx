import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../contexts/EmotionContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../../../components/icons/CheckIcon";
import { Link } from "react-router-dom";
import NavBar2 from "../../../layouts/NavBar2";

export default function HEPEmotionsPage() {
  const {
    getEmotionsByGroup,
    emotions,
    getEmotionById,
    feeling,
    setFeeling,
    setEmotionMemo,
    emotionMemo,
  } = useContext(EmotionContext);

  useEffect(() => {
    getEmotionsByGroup({ emotionalGroup: "HIGH_ENERGY_PLEASANT" });
    setFeeling(null);
  }, []);

  const handleClick = (e) => {
    getEmotionById(e.target.value);
    console.log(e.target.value);
    console.log("fromEmotions", feeling);
    setEmotionMemo({ ...emotionMemo, emotionId: +e.target.value });
  };
  return (
    <>
      <NavBar2 path={"/addEmotion/emotionGroup"} />
      <div className="w-[430px] overflow-auto">
        <div className="grid grid-cols-6 gap-x-32 gap-y-2">
          {emotions?.map((el) => {
            return (
              <button
                key={el.id}
                onClick={handleClick}
                value={el.id}
                className="btn bg-happyYellow w-[120px] h-[120px] flex justify-center items-center rounded-full"
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
      {feeling ? (
        <div className="w-[385px] h-[320px] bg-black text-white mx-auto rounded-3xl flex flex-col justify-center items-center gap-8 p-8">
          <h3 className="text-[3rem]">{feeling.name}</h3>
          <div>{feeling.description}</div>
          <Link to="/addEmotion/theme">
            <button
              className={`btn w-[52px] h-[52px] flex justify-center items-center border-none bg-happyYellow rounded-full`}
            >
              <CheckIcon />
            </button>
          </Link>
        </div>
      ) : null}
    </>
  );
}
