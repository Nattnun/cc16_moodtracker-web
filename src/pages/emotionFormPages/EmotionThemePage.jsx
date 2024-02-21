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
import TagsItemList from "../../components/TagsItemList";
import { useState } from "react";

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
    createThemeTagByUserId,
    createPlaceTagByUserId,
    createPeopleTagByUserId,
    deleteThemeTagByThemeId,
    deletePlaceTagByPlaceId,
    deletePeopleTagByPeopleId,
  } = useContext(TagsContext);
  const { authUser } = useContext(AuthContext);
  const [currentColor, setCurrentColor] = useState("");
  const [eventToggle, setEventToggle] = useState(false);
  const [selectTag, setSelectTag] = useState({});

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
    setCurrentColor(TextColor());
  }, [eventToggle]);

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
    setSelectTag({
      ...selectTag,
      themeName: e.target.name,
      themeId: e.target.value,
    });
    setEmotionMemo({ ...emotionMemo, themeId: IfZero(+e.target.value) });
  };
  const handleOnClickPlace = (e) => {
    // console.log("place", e.target.value);
    setSelectTag({
      ...selectTag,
      placeName: e.target.name,
      placeId: e.target.value,
    });
    setEmotionMemo({ ...emotionMemo, placeId: IfZero(+e.target.value) });
  };
  const handleOnClickPeople = (e) => {
    // console.log("people", e.target.value);
    setSelectTag({
      ...selectTag,
      peopleName: e.target.name,
      peopleId: e.target.value,
    });
    setEmotionMemo({ ...emotionMemo, peopleId: IfZero(+e.target.value) });
  };

  const onAddTheme = async (value) => {
    await createThemeTagByUserId(authUser.id, value);
    setEventToggle(!eventToggle);
  };

  const onAddPlace = async (value) => {
    await createPlaceTagByUserId(authUser.id, value);
    setEventToggle(!eventToggle);
  };

  const onAddPeople = async (value) => {
    await createPeopleTagByUserId(authUser.id, value);
    setEventToggle(!eventToggle);
  };
  const onDeleteThemeTag = async () => {
    await deleteThemeTagByThemeId(+selectTag.themeId);
    setEventToggle(!eventToggle);
  };

  const onDeletePlaceTag = async () => {
    await deletePlaceTagByPlaceId(+selectTag.placeId);
    setEventToggle(!eventToggle);
  };

  const onDeletePeopleTag = async () => {
    await deletePeopleTagByPeopleId(+selectTag.peopleId);
    setEventToggle(!eventToggle);
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

        <div className="z-0">
          <TagsItemList
            name={"Theme"}
            tagsData={theme.themeTags}
            tagsId={emotionMemo.themeId}
            color={currentColor}
            onClick={handleOnClickTheme}
            onAdd={onAddTheme}
            onDelete={onDeleteThemeTag}
            selectName={selectTag.themeName}
          />
        </div>
        <div className="z-0">
          <TagsItemList
            name={"Place"}
            tagsData={place.placeTags}
            tagsId={emotionMemo.placeId}
            color={currentColor}
            onClick={handleOnClickPlace}
            onAdd={onAddPlace}
            onDelete={onDeletePlaceTag}
            selectName={selectTag.placeName}
          />
        </div>
        <div className="z-0">
          <TagsItemList
            name={"People"}
            tagsData={people.peopleTags}
            tagsId={emotionMemo.peopleId}
            color={currentColor}
            onClick={handleOnClickPeople}
            onAdd={onAddPeople}
            onDelete={onDeletePeopleTag}
            selectName={selectTag.peopleName}
          />
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
