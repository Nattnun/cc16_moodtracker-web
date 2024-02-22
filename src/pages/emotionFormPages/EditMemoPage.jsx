import React from "react";
import { useContext } from "react";
import { EmotionContext } from "../../features/emotion/contexts/EmotionContext";
import CheckIcon from "../../components/icons/CheckIcon";
import TextAreaInput from "../../components/TextAreaInput";
import NavBar2 from "../../layouts/NavBar2";
import { useNavigate } from "react-router-dom";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";

export default function EditMemoPage() {
  const { selectedMemo, updateMemo, setUpdateMemo, updateMemoById } =
    useContext(MemoContext);

  const navigate = useNavigate();

  useEffect(() => {
    setUpdateMemo({ ...updateMemo, memo: selectedMemo.memo });
  }, []);

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

  const handleOnChange = (e) => {
    setUpdateMemo({
      ...updateMemo,
      memo: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await updateMemoById(selectedMemo.id, updateMemo);
    navigate("/analytic/theEmotion");
  };

  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <NavBar2 path={"/analytic/theEmotion"} />
      <div
        className={`w-[364px] h-[364px] bg-${Color()} flex justify-center items-center rounded-full`}
      >
        <TextAreaInput
          placeholder={`Describe what might be causing you feel ${selectedMemo.emotion.name}...`}
          onChange={handleOnChange}
          value={updateMemo.memo}
        />
      </div>
      <button
        onClick={handleSubmit}
        className={`btn w-[52px] h-[52px] flex justify-center items-center bg-${Color()} rounded-full`}
      >
        <CheckIcon />
      </button>
      <div className="w-[100px] h-[100px]"></div>
    </div>
  );
}
