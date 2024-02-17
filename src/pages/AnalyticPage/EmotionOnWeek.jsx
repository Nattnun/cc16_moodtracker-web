import React from "react";
import ChartBar from "../../components/ChartBar";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";

export default function EmotionOnWeek() {
  const { authUser } = useContext(AuthContext);
  const {
    getSundayEmotion,
    SUN,
    getMondayEmotion,
    MON,
    getTuesdayEmotion,
    TUE,
    getWednesdayEmotion,
    WED,
    getThursdayEmotion,
    THU,
    getFridayEmotion,
    FRI,
    getSaturdayEmotion,
    SAT,
  } = useContext(MemoContext);

  useEffect(() => {
    getSundayEmotion(authUser.id);
    getMondayEmotion(authUser.id);
    getTuesdayEmotion(authUser.id);
    getWednesdayEmotion(authUser.id);
    getThursdayEmotion(authUser.id);
    getFridayEmotion(authUser.id);
    getSaturdayEmotion(authUser.id);
  }, []);

  return (
    <div className="h-[932px] flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold text-center px-8">
        the emotion you feel during the week
      </h3>
      <div className="h-[2rem]"></div>
      <div className="flex gap-4 justify-center items-center">
        <ChartBar data={SUN} width="40px" word={"SUN"} />
        <ChartBar data={MON} width="40px" word={"MON"} />
        <ChartBar data={TUE} width="40px" word={"TUE"} />
        <ChartBar data={WED} width="40px" word={"WED"} />
        <ChartBar data={THU} width="40px" word={"THU"} />
        <ChartBar data={FRI} width="40px" word={"FRI"} />
        <ChartBar data={SAT} width="40px" word={"SAT"} />
      </div>
    </div>
  );
}
