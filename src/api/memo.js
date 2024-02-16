import axios from "../config/axios";

export const createEmotionMemo = (memo) => axios.post("/memo/createMemo", memo);

export const getLatestMemo = (userId) =>
  axios.get(`/memo/getLatestMemo/${userId}`);
