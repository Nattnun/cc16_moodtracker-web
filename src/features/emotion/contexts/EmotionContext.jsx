import { useState } from "react";
import { createContext } from "react";
import * as emotionApi from "../../../api/emotion";

export const EmotionContext = createContext();

export default function EmotionContextProvider({ children }) {
  const [emotions, setEmotions] = useState([]);
  const [feeling, setFeeling] = useState({});

  const getEmotionsByGroup = async (emotionalGroup) => {
    const res = await emotionApi.getEmotionByGroup(emotionalGroup);
    setEmotions(res.data.emotions);
  };

  const getEmotionById = async (emoId) => {
    const res = await emotionApi.getEmotionById(emoId);
    console.log("res", res);
    setFeeling(res.data.emotion);
  };

  return (
    <EmotionContext.Provider
      value={{ getEmotionsByGroup, emotions, getEmotionById, feeling }}
    >
      {children}
    </EmotionContext.Provider>
  );
}
