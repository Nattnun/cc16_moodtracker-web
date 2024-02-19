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
  const [selectedMemo, setSelectedMemo] = useState({});

  //time-period
  const [morning, setMorning] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [evenings, setEvenings] = useState([]);
  const [lateNight, setLateNight] = useState([]);

  //day-of-week
  const [MON, setMON] = useState([]);
  const [TUE, setTUE] = useState([]);
  const [WED, setWED] = useState([]);
  const [THU, setTHU] = useState([]);
  const [FRI, setFRI] = useState([]);
  const [SAT, setSAT] = useState([]);
  const [SUN, setSUN] = useState([]);

  //tags
  const [theme, setTheme] = useState([]);
  const [place, setPlace] = useState([]);
  const [people, setPeople] = useState([]);

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

  const getSelectedMemo = async (memoId) => {
    try {
      const memo = await memoApi.getSelectedMemo(memoId);
      // console.log("memo", memo.data);
      setSelectedMemo(memo.data);
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
      setLateNight(lateNightData.data);
    } catch (err) {
      console.log(err);
    }
  };

  //day-of-week
  const getSundayEmotion = async (userId) => {
    try {
      const sunday = await memoApi.getSUN(userId);
      setSUN(sunday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMondayEmotion = async (userId) => {
    try {
      const monday = await memoApi.getMON(userId);
      setMON(monday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTuesdayEmotion = async (userId) => {
    try {
      const tuesday = await memoApi.getTUE(userId);
      setTUE(tuesday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getWednesdayEmotion = async (userId) => {
    try {
      const wednesday = await memoApi.getWED(userId);
      setWED(wednesday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getThursdayEmotion = async (userId) => {
    try {
      const thursday = await memoApi.getTHU(userId);
      setTHU(thursday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getFridayEmotion = async (userId) => {
    try {
      const friday = await memoApi.getFRI(userId);
      setFRI(friday.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSaturdayEmotion = async (userId) => {
    try {
      const saturday = await memoApi.getSAT(userId);
      setSAT(saturday.data);
    } catch (err) {
      console.log(err);
    }
  };

  //getTheme
  const getTheme = async (userId) => {
    try {
      const themeData = await memoApi.getThemeApi(userId);
      setTheme(themeData.data);
      // console.log("theme", themeData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlace = async (userId) => {
    try {
      const placeData = await memoApi.getPlaceApi(userId);
      setPlace(placeData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPeople = async (userId) => {
    try {
      const peopleData = await memoApi.getPeopleApi(userId);
      setPeople(peopleData.data);
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
        getSundayEmotion,
        SUN,
        getMondayEmotion,
        MON,
        getTuesdayEmotion,
        TUE,
        getWednesdayEmotion,
        WED,
        getThursdayEmotion,
        THU,
        getFridayEmotion,
        FRI,
        getSaturdayEmotion,
        SAT,
        getTheme,
        theme,
        getPlace,
        place,
        getPeople,
        people,
        getSelectedMemo,
        selectedMemo,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
}
