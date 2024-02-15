import axios from "../config/axios";

export const createEmotionMemo = (memo) => {
  axios.post("/memo/createMemo", memo);
};
