import React from "react";

export default function ChartSandwich({ data }) {
  return (
    <div className=" grid grid-cols-3 items-end gap-8">
      {data.map((el, index) => {
        return (
          <div
            key={el.id}
            className="flex flex-col justify-center items-center"
          >
            {el.Memo.length == 0 ? (
              <div
                className={`bg-gray-300 h-[20px] w-[70px] rounded-[100%] 
         drop-shadow-lg`}
              ></div>
            ) : (
              <div className="flex flex-col h-[80px] justify-end -space-y-3 hover:-space-y-2 transition-all ease-out duration-1000">
                {el.Memo.map((subEl, index) => {
                  function Color() {
                    if (
                      subEl.emotion.emotionalGroup === "HIGH_ENERGY_UNPLEASANT"
                    ) {
                      return "angryRed";
                    }
                    if (
                      subEl.emotion.emotionalGroup === "HIGH_ENERGY_PLEASANT"
                    ) {
                      return "happyYellow";
                    }
                    if (
                      subEl.emotion.emotionalGroup === "LOW_ENERGY_UNPLEASANT"
                    ) {
                      return "sadBlue";
                    }
                    if (
                      subEl.emotion.emotionalGroup === "LOW_ENERGY_PLEASANT"
                    ) {
                      return "peaceGreen";
                    }
                  }

                  return (
                    <div
                      key={subEl.id}
                      style={{ zIndex: `${subEl.id}` }}
                      className={`bg-${Color()} h-[20px] w-[70px] rounded-[100%] 
                  drop-shadow-lg transition-all ease-out duration-800`}
                    ></div>
                  );
                })}
              </div>
            )}

            <div>{el.name}</div>
          </div>
        );
      })}
    </div>
  );
}
