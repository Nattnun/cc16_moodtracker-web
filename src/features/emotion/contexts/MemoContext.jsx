import { useState } from "react";
import * as memoApi from "../../../api/memo";
import { createContext } from "react";

export const MemoContext = createContext();

export default function MemoContextProvider({ children }) {
  const [latestMemo, setLatestMemo] = useState({});

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
    <MemoContext.Provider value={{ getLatestMemo, latestMemo }}>
      {children}
    </MemoContext.Provider>
  );
}
