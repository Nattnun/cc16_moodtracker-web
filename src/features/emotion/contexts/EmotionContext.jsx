import { useState } from "react";
import { createContext } from "react";
import * as emotionApi from "../../../api/emotion";
import * as memoApi from "../../../api/memo";

export const EmotionContext = createContext();

// const initial = {
//   userId: "",
//   memo: "",
//   emotionId: "",
//   themeId: "",
//   placeId: "",
//   peopleId: "",
// };

export default function EmotionContextProvider({ children }) {
  const [emotions, setEmotions] = useState([]);
  const [feeling, setFeeling] = useState({});
  // const [emotionMemo, setEmotionMemo] = useState({});

  const getEmotionsByGroup = async (emotionalGroup) => {
    const res = await emotionApi.getEmotionByGroup(emotionalGroup);
    setEmotions(res.data.emotions);
  };

  const getEmotionById = async (emoId) => {
    const res = await emotionApi.getEmotionById(emoId);
    console.log("res", res);
    setFeeling(res.data.emotion);
  };

  // const createEmotionMemo = async (memo) => {
  //   const res = await memoApi.createEmotionMemo(memo);
  //   console.log(res);
  // };

  return (
    <EmotionContext.Provider
      value={{
        getEmotionsByGroup,
        emotions,
        getEmotionById,
        feeling,
        setFeeling,
        // setEmotionMemo,
        // emotionMemo,
        // createEmotionMemo,
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
}
