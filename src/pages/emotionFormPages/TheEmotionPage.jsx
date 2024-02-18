import React from "react";
import { useContext } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";

export default function TheEmotionPage() {
  const { selectedMemo } = useContext(MemoContext);

  console.log("selected", selectedMemo);

  const DayConvert = (day) => {
    const beforeFormat = day.slice(0, 9).split("-");
    const formatDay = [];
    formatDay.push(beforeFormat[2]);
    formatDay.push(beforeFormat[1]);
    formatDay.push(beforeFormat[0]);
    const convertedDay = formatDay.join("/");

    return convertedDay;
  };

  const TimeConvert = (time) => {
    const convertTime = JSON.stringify(time).slice(12, 20).split(":");
    const preConvertTime = +convertTime[0] + 7;
    convertTime.shift();
    convertTime.unshift(JSON.stringify(preConvertTime));
    const convertedTime = convertTime.join(":");

    return convertedTime;
  };

  const TimePeriod = (period) => {
    if (period == "MORNING") {
      return "Morning";
    }
    if (period == "AFTERNOON") {
      return "Afternoon";
    }
    if (period == "EVENINGS") {
      return "Evenings";
    }
    if (period == "LATENIGHT") {
      return "LateNight";
    }
  };

  function Color(el) {
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

  useEffect(() => {
    DayConvert(selectedMemo.createdAt);
  }, []);

  return (
    <div className=" h-full w-[430px]  flex flex-col relative justify-center items-center gap-8">
      <div
        className={`bg-${Color(
          selectedMemo
        )} h-[720px] w-[400px] rounded-3xl drop-shadow-md flex flex-col justify-center items-center `}
      >
        <div className="absolute top-4 -left-4 right-0 flex w-[430px] justify-between px-8">
          <div>
            {selectedMemo.weekDay} {DayConvert(selectedMemo.createdAt)}
          </div>
          <div>
            {TimeConvert(selectedMemo.createdAt)}{" "}
            {TimePeriod(selectedMemo.timePeriod)}
          </div>
        </div>
        <div className="w-[380px] h-[380px]">{selectedMemo.memo}</div>
        <div className=" flex flex-col">
          <div>I&apos;am feeling </div>
          <div className="text-4xl">{selectedMemo.emotion.name}</div>
        </div>
        <div className="flex "></div>
      </div>
    </div>
  );
}
