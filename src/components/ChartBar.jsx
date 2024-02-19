import React from "react";

export default function ChartBar({ data, word, width = "70px" }) {
  const maxValue = () => {
    const count = data.map((el) => {
      return +el.count_emotionalGroup;
    });
    return count.reduce((acc, curr) => acc + curr, 0);
  };

  const percentage = (full, have) => {
    return Math.round((have / full) * 100);
  };

  const sizeCalc = (percent) => {
    return (percent / 100) * 390;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        style={{ width: `${width}` }}
        className={`h-[380px] rounded-[1rem] bg-gray-300 overflow-hidden`}
      >
        {data
          ? data.map((el) => {
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

              const percent = percentage(maxValue(), +el.count_emotionalGroup);
              return (
                <div
                  key={el.emotionalGroup}
                  style={{ height: `${sizeCalc(percent)}px` }}
                  className={`bg-${Color()}`}
                ></div>
              );
            })
          : null}
      </div>
      <div className="h-[0.5rem]"></div>
      <div>{word}</div>
    </div>
  );
}
