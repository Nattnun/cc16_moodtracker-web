import { useState } from "react";
import * as memoApi from "../../../api/memo";
import { createContext } from "react";

export const MemoContext = createContext();

export default function MemoContextProvider({ children }) {
  const [emotionMemo, setEmotionMemo] = useState({});
  const [latestMemo, setLatestMemo] = useState({});
  const [allMemo, setAllMemo] = useState([]);
  const [breakDown, setBreakDown] = useState([]);
  const [mostEmotion, setMostEmotion] = useState([]);
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [evenings, setEvenings] = useState([]);
  const [lateNight, setLateNight] = useState([]);

  const createEmotionMemo = async (memo) => {
    const res = await memoApi.createEmotionMemo(memo);
    console.log(res);
  };

  const getLatestMemo = async (userId) => {
    try {
      const memo = await memoApi.getLatestMemo(userId);
      // console.log("memo", memo);
      setLatestMemo(memo);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllMemo = async (userId) => {
    try {
      const memo = await memoApi.getAllMemo(userId);
      // console.log("AllMemo", memo.data);
      setAllMemo(memo.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBreakDown = async (userId) => {
    try {
      const breakDownMemo = await memoApi.getBreakDownMemo(userId);
      // console.log("breakDown", breakDownMemo.data);
      setBreakDown(breakDownMemo.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMostEmotion = async (userId) => {
    try {
      const mostMemo = await memoApi.mostEmotionMemo(userId);
      // console.log("mostEmotion", mostMemo.data);
      setMostEmotion(mostMemo.data);
    } catch (err) {
      console.log(err);
    }
  };

  //time-period
  const getMorningEmotion = async (userId) => {
    try {
      const morningData = await memoApi.getMorning(userId);
      // console.log("fromContext", morningData.data);
      setMorning(morningData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAfternoonEmotion = async (userId) => {
    try {
      const afternoonData = await memoApi.getAfternoon(userId);
      setAfternoon(afternoonData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEveningsEmotion = async (userId) => {
    try {
      const eveningsData = await memoApi.getEvenings(userId);
      setEvenings(eveningsData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLateNightEmotion = async (userId) => {
    try {
      const lateNightData = await memoApi.getLateNight(userId);
      // console.log(lateNightData);
      setLateNight(lateNightData.data);
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
        getAllMemo,
        allMemo,
        getBreakDown,
        breakDown,
        getMostEmotion,
        mostEmotion,
        getMorningEmotion,
        morning,
        getAfternoonEmotion,
        afternoon,
        getEveningsEmotion,
        evenings,
        getLateNightEmotion,
        lateNight,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
}
