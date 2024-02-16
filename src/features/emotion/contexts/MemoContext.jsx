import { useState } from "react";
import * as memoApi from "../../../api/memo";
import { createContext } from "react";

export const MemoContext = createContext();

export default function MemoContextProvider({ children }) {
  const [emotionMemo, setEmotionMemo] = useState({});
  const [latestMemo, setLatestMemo] = useState({});

  const createEmotionMemo = async (memo) => {
    const res = await memoApi.createEmotionMemo(memo);
    console.log(res);
  };

  const getLatestMemo = async (userId) => {
    try {
      const memo = await memoApi.getLatestMemo(userId);
      console.log("memo", memo);
      setLatestMemo(memo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MemoContext.Provider
      value={{
        emotionMemo,
        setEmotionMemo,
        createEmotionMemo,
        getLatestMemo,
        latestMemo,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
}
