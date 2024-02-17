import axios from "../config/axios";

export const createEmotionMemo = (memo) => axios.post("/memo/createMemo", memo);

export const getLatestMemo = (userId) =>
  axios.get(`/memo/getLatestMemo/${userId}`);

export const getAllMemo = (userId) => axios.get(`/memo/getAllMemo/${userId}`);

export const getBreakDownMemo = (userId) =>
  axios.get(`/memo/getBreakDownMemo/${userId}`);

export const mostEmotionMemo = (userId) =>
  axios.get(`/memo/getMostEmotion/${userId}`);

//time-period
export const getMorning = (userId) => axios.get(`/memo/getMorning/${userId}`);
export const getAfternoon = (userId) =>
  axios.get(`/memo/getAfternoon/${userId}`);
export const getEvenings = (userId) => axios.get(`/memo/getEvenings/${userId}`);
export const getLateNight = (userId) =>
  axios.get(`/memo/getLateNight/${userId}`);
