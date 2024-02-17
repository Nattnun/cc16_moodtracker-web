import React from "react";
import { useContext } from "react";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { useEffect } from "react";

export default function BreakDownMemoPage() {
  const { authUser } = useContext(AuthContext);
  const { getBreakDown, breakDown } = useContext(MemoContext);

  useEffect(() => {
    getBreakDown(authUser.id);
  }, []);

  const maxValue = () => {
    const count = breakDown.map((el) => {
      return +el.emotion_count;
    });
    return count.reduce((acc, curr) => acc + curr, 0);
  };

  // console.log("maxValue", maxValue());

  const percentage = (full, have) => {
    return Math.round((have / full) * 100);
  };

  const sizeCalc = (percent) => {
    return (percent / 100) * 500;
  };

  return (
    <div className="h-[932px] flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold text-center px-8">
        Your Overall check-in breakdown
      </h3>
      <div className="h-[2rem]"></div>
      {breakDown.length == 0 ? (
        <div>you don't have any Memo yet</div>
      ) : (
        <div className="flex flex-wrap mx-12 justify-center items-center">
          {breakDown.map((el) => {
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

            const percent = percentage(maxValue(), +el.emotion_count);
            return (
              <div
                key={el.emotionalGroup}
                style={{
                  height: `${sizeCalc(percent)}px`,
                  width: `${sizeCalc(percent)}px`,
                }}
                className={`bg-${Color()} rounded-full flex justify-center items-center text-xl font-medium`}
              >
                {`${percent}%`}
              </div>
            );
          })}
        </div>
      )}
      <div className="h-[4rem]"></div>
    </div>
  );
}
