import React from "react";
import { useContext } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { useEffect } from "react";

export default function MostEmotionPage() {
  const { authUser } = useContext(AuthContext);
  const { getMostEmotion, mostEmotion } = useContext(MemoContext);
  useEffect(() => {
    getMostEmotion(authUser.id);
  }, []);
  return (
    <div className="h-[930px] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold text-center px-8">
        the emotion you feel most often
      </div>
      <div className="h-[60px]"></div>
      {mostEmotion.length == 0 ? (
        <div className="text-center">you don't have any Memo yet</div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          {mostEmotion.map((el) => {
            function Color() {
              if (el.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
                return "angryRed";
              }
              if (el.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
                return "happyYellow";
              }
              if (el.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
                return "sadBlue";
              }
              if (el.emotionalGroup === "LOW_ENERGY_PLEASANT") {
                return "peaceGreen";
              }
            }

            return (
              <div
                key={el.id}
                className="w-[430px] grid grid-cols-3 px-8 justify-center items-center"
              >
                <div className="flex justify-center">
                  <div
                    className={`w-[40px] h-[40px] rounded-full bg-${Color()}`}
                  ></div>
                </div>
                <div>{el.name}</div>
                <div className="flex justify-center">
                  {el.count_per_emotion}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
