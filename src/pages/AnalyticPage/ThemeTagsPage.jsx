import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";

export default function ThemeTagsPage() {
  const { authUser } = useContext(AuthContext);
  const { getTheme, theme } = useContext(MemoContext);

  useEffect(() => {
    getTheme(authUser.id);
  }, []);

  return (
    <div className="h-[930px] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold text-center px-8">
        What you were doing and how you felt
      </div>
      <div className=" grid grid-cols-3 items-end gap-8">
        {theme.map((el, index) => {
          return (
            <div
              key={el.id}
              className="flex flex-col justify-center items-center"
            >
              {el.Memo.length == 0 ? (
                <div
                  className={`bg-slate-500 h-[20px] w-[70px] rounded-[100%] 
             drop-shadow-lg`}
                ></div>
              ) : (
                <div className="flex flex-col origin-center -space-y-2">
                  {el.Memo.map((subEl, index) => {
                    function Color() {
                      if (
                        subEl.emotion.emotionalGroup ===
                        "HIGH_ENERGY_UNPLEASANT"
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
                      drop-shadow-lg`}
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
    </div>
  );
}
