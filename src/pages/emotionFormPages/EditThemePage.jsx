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
import { useNavigate } from "react-router-dom";

export default function EditThemePage() {
  const { selectedMemo, updateMemo, setUpdateMemo, updateMemoById } =
    useContext(MemoContext);
  const {
    getThemeByUserId,
    theme,
    getPlaceByUserId,
    place,
    getPeopleByUserId,
    people,
  } = useContext(TagsContext);
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("authUser", authUser);
    getThemeByUserId(authUser.id);
    getPlaceByUserId(authUser.id);
    getPeopleByUserId(authUser.id);
    // console.log("theme", theme);
    // console.log("place", place);
    // console.log("people", people);
    setUpdateMemo({
      ...updateMemo,
      themeId: selectedMemo.themeId,
      placeId: selectedMemo.placeId,
      peopleId: selectedMemo.peopleId,
    });
  }, []);

  const textDefault = "text-4xl font-semibold";
  const Color = () => {
    if (selectedMemo.emotion.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "angryRed";
    }
    if (selectedMemo.emotion.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "happyYellow";
    }
    if (selectedMemo.emotion.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "sadBlue";
    }
    if (selectedMemo.emotion.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "peaceGreen";
    }
  };

  const TextColor = () => {
    if (selectedMemo.emotion.emotionalGroup === "HIGH_ENERGY_UNPLEASANT") {
      return "#F9404E";
    }
    if (selectedMemo.emotion.emotionalGroup === "HIGH_ENERGY_PLEASANT") {
      return "#FFBF2D";
    }
    if (selectedMemo.emotion.emotionalGroup === "LOW_ENERGY_UNPLEASANT") {
      return "#7690FE";
    }
    if (selectedMemo.emotion.emotionalGroup === "LOW_ENERGY_PLEASANT") {
      return "#46D691";
    }
  };

  const IfZero = (input) => {
    if (+input === 0) {
      return null;
    } else return input;
  };

  const handleOnClickTheme = (e) => {
    console.log("theme", e.target.value);
    setUpdateMemo({
      ...updateMemo,
      themeId: IfZero(+e.target.value),
    });
  };

  const handleOnClickPlace = (e) => {
    console.log("place", e.target.value);
    setUpdateMemo({ ...updateMemo, placeId: IfZero(+e.target.value) });
  };

  const handleOnClickPeople = (e) => {
    console.log("people", e.target.value);
    setUpdateMemo({ ...updateMemo, peopleId: IfZero(+e.target.value) });
  };

  const handleOnSubmit = async () => {
    console.log("updateMemo", updateMemo);
    await updateMemoById(selectedMemo.id, updateMemo);
    navigate("/analytic/theEmotion");
  };

  return (
    <>
      <NavBar2 path={"/analytic/theEmotion"} />
      <div className="flex flex-col gap-8 justify-center items-center px-6">
        <div className="text-3xl mx-4 font-medium">
          What were you doing when you felt
          <span style={{ color: TextColor() }} className={`${textDefault}`}>
            {" "}
            {selectedMemo.emotion.name}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-medium">Theme</h3>
          <div className="flex flex-wrap gap-1">
            {theme.data?.themeTags.map((el) => {
              return (
                <button
                  key={el.id}
                  value={+el.id}
                  onClick={handleOnClickTheme}
                  className={`border px-[1rem] rounded-full ${
                    updateMemo.themeId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              onClick={handleOnClickTheme}
              className={`border px-[1rem] rounded-full ${
                !updateMemo.themeId ? `bg-${Color()}` : null
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
            {place.data?.placeTags.map((el) => {
              return (
                <button
                  key={el.id}
                  value={+el.id}
                  onClick={handleOnClickPlace}
                  className={`border px-[1rem] rounded-full ${
                    updateMemo.placeId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              onClick={handleOnClickPlace}
              className={`border px-[1rem] rounded-full ${
                !updateMemo.placeId ? `bg-${Color()}` : null
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
            {people.data?.peopleTags.map((el) => {
              return (
                <button
                  key={el.id}
                  value={+el.id}
                  onClick={handleOnClickPeople}
                  className={`border px-[1rem] rounded-full ${
                    updateMemo.peopleId == el.id ? `bg-${Color()}` : null
                  }`}
                >
                  {el.name}
                </button>
              );
            })}
            <button
              value={null}
              onClick={handleOnClickPeople}
              className={`border px-[1rem] rounded-full ${
                !updateMemo.peopleId ? `bg-${Color()}` : null
              }`}
            >
              none
            </button>
            <button className="border border-black px-[1rem] rounded-full">
              Add+
            </button>
          </div>
        </div>

        <button
          onClick={handleOnSubmit}
          className={`btn w-[52px] h-[52px] flex justify-center items-center bg-${Color()} rounded-full`}
        >
          <CheckIcon />
        </button>
      </div>
    </>
  );
}
