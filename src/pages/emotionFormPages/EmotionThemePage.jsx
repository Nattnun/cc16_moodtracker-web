import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import { useEffect } from "react";
import { TagsContext } from "../../features/emotion/contexts/TagsContext";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import CheckIcon from "../../components/icons/CheckIcon";
import { Link } from "react-router-dom";
import NavBar2 from "../../layouts/NavBar2";

export default function EmotionThemePage() {
  const { feeling, setEmotionMemo, emotionMemo } = useContext(EmotionContext);
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

  useEffect(() => {
    setEmotionMemo({ ...emotionMemo, themeId: "", placeId: "", peopleId: "" });
  }, []);

  const handleOnClickTheme = (e) => {
    // console.log("theme", e.target.value);
    setEmotionMemo({ ...emotionMemo, themeId: +e.target.value });
  };
  const handleOnClickPlace = (e) => {
    // console.log("place", e.target.value);
    setEmotionMemo({ ...emotionMemo, placeId: +e.target.value });
  };
  const handleOnClickPeople = (e) => {
    // console.log("people", e.target.value);
    setEmotionMemo({ ...emotionMemo, peopleId: +e.target.value });
  };

  return (
    <>
      <NavBar2 path={Path()} />
      <div className="flex flex-col gap-8 justify-center items-center px-6">
        <div className="text-3xl mx-4 font-medium">
          What were you doing when you felt
          <span className={`${textDefault} text-${Color()}`}>
            {" "}
            {feeling?.name}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-medium">Theme</h3>
          <div className="flex flex-wrap gap-1">
            {theme.data?.themeTags.map((el) => {
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
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Place</h3>
          <div className="flex flex-wrap gap-1">
            {place.data?.placeTags.map((el) => {
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
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">People</h3>
          <div className="flex flex-wrap gap-1">
            {people.data?.peopleTags.map((el) => {
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
