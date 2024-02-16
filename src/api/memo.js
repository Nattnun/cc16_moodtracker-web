import axios from "../config/axios";

export const createEmotionMemo = (memo) => axios.post("/memo/createMemo", memo);

export const getLatestMemo = (userId) =>
  axios.get(`/memo/getLatestMemo/${userId}`);

export const getAllMemo = (userId) => axios.get(`/memo/getAllMemo/${userId}`);

export const getBreakDownMemo = (userId) =>
  axios.get(`/memo/getBreakDownMemo/${userId}`);
