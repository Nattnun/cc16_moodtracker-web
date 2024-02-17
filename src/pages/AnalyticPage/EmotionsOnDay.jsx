import React from "react";
import ChartBar from "../../components/ChartBar";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";

export default function EmotionsOnDay() {
  const { authUser } = useContext(AuthContext);
  const {
    getMorningEmotion,
    morning,
    getAfternoonEmotion,
    afternoon,
    getEveningsEmotion,
    evenings,
    getLateNightEmotion,
    lateNight,
  } = useContext(MemoContext);

  useEffect(() => {
    getMorningEmotion(authUser.id);
    getAfternoonEmotion(authUser.id);
    getEveningsEmotion(authUser.id);
    getLateNightEmotion(authUser.id);
  }, []);

  return (
    <div className="h-[932px] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold text-center px-8">
        the emotion you feel during the day
      </div>
      <div className="h-[2rem]"></div>
      <div className="flex gap-6 justify-center items-center">
        <ChartBar data={morning} word={"Morning"} />
        <ChartBar data={afternoon} word={"Afternoon"} />
        <ChartBar data={evenings} word={"Evenings"} />
        <ChartBar data={lateNight} word={"LateNight"} />
      </div>
    </div>
  );
}
