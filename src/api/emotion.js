import axios from "../config/axios";

export const getEmotionByGroup = (emotionGroup) =>
  axios.post("emotion/getEmotionByGroup", emotionGroup);

export const getEmotionById = (emoId) =>
  axios.get(`emotion/getEmotionById/${emoId}`);
