import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { useEffect } from "react";
import { TagsContext } from "../../features/emotion/contexts/TagsContext";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import CheckIcon from "../../components/icons/CheckIcon";
import { Link } from "react-router-dom";
import NavBar2 from "../../layouts/NavBar2";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";

export default function EmotionThemePage() {
  const { feeling } = useContext(EmotionContext);
  const { setEmotionMemo, emotionMemo } = useContext(MemoContext);
  const {
    getThemeByUserId,
    theme,
    getPlaceByUserId,
    place,
    getPeopleByUserId,
    people,
  } = useContext(TagsContext);
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    // console.log("authUser", authUser);
    getThemeByUserId(authUser.id);
    getPlaceByUserId(authUser.id);
    getPeopleByUserId(authUser.id);
    // console.log("theme", theme);
    // console.log("place", place);
    // console.log("people", people);
    setEmotionMemo({
      ...emotionMemo,
      themeId: null,
      placeId: null,
      peopleId: null,
    });
  }, []);

  const textDefault = "text-4xl font-semibold";
  const Color = () => {
    if (feeling.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "angryRed";
    }
    if (feeling.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "happyYellow";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "sadBlue";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "peaceGreen";
    }
  };

  const TextColor = () => {
    if (feeling.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "#F9404E";
    }
    if (feeling.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "#FFBF2D";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "#7690FE";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "#46D691";
    }
  };

  const Path = () => {
    if (feeling.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "/addEmotion/heuEmotions";
    }
    if (feeling.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "/addEmotion/hepEmotions";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "/addEmotion/leuEmotions";
    }
    if (feeling.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "/addEmotion/lepEmotions";
    }
  };

  const IfZero = (input) => {
    if (+input === 0) {
      return null;
    } else return input;
  };

  const handleOnClickTheme = (e) => {
    // console.log("theme", e.target.value);
    setEmotionMemo({ ...emotionMemo, themeId: IfZero(+e.target.value) });
  };
  const handleOnClickPlace = (e) => {
    // console.log("place", e.target.value);
    setEmotionMemo({ ...emotionMemo, placeId: IfZero(+e.target.value) });
  };
  const handleOnClickPeople = (e) => {
    // console.log("people", e.target.value);
    setEmotionMemo({ ...emotionMemo, peopleId: IfZero(+e.target.value) });
  };

  return (
    <>
      <NavBar2 path={Path()} />
      <div className="flex flex-col gap-8 justify-center items-center px-6">
        <div className="text-3xl mx-4 font-medium">
          What were you doing when you felt
          <span style={{ color: TextColor() }} className={`${textDefault}`}>
            {" "}
            {feeling?.name}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-medium">Theme</h3>
          <div className="flex flex-wrap gap-1">
            {theme.themeTags?.map((el) => {
              return (
                <button
                  key={el.id}
                  value={el.id}
                  onClick={handleOnClickTheme}
                  className={`border px-[1rem] rounded-full ${
                    emotionMemo.themeId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              className={`border px-[1rem] rounded-full ${
                !emotionMemo.themeId ? `bg-${Color()}` : null
              }`}
            >
              none
            </button>
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Place</h3>
          <div className="flex flex-wrap gap-1">
            {place.placeTags?.map((el) => {
              return (
                <button
                  key={el.id}
                  value={el.id}
                  onClick={handleOnClickPlace}
                  className={`border px-[1rem] rounded-full ${
                    emotionMemo.placeId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              className={`border px-[1rem] rounded-full ${
                !emotionMemo.placeId ? `bg-${Color()}` : null
              }`}
            >
              none
            </button>
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">People</h3>
          <div className="flex flex-wrap gap-1">
            {people.peopleTags?.map((el) => {
              return (
                <button
                  key={el.id}
                  value={el.id}
                  onClick={handleOnClickPeople}
                  className={`border px-[1rem] rounded-full ${
                    emotionMemo.peopleId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              className={`border px-[1rem] rounded-full ${
                !emotionMemo.peopleId ? `bg-${Color()}` : null
              }`}
            >
              none
            </button>
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <Link to="/addEmotion/memo">
          <button
            className={`btn w-[52px] h-[52px] flex justify-center items-center bg-${Color()} rounded-full`}
          >
            <CheckIcon />
          </button>
        </Link>
      </div>
    </>
  );
}
