import axios from "../config/axios";

export const createEmotionMemo = (memo) => axios.post("/memo/createMemo", memo);

export const updateMemoByMemoId = (memoId, updateMemo) =>
  axios.patch(`/memo/updateTags/${memoId}`, updateMemo);

export const getLatestMemo = (userId) =>
  axios.get(`/memo/getLatestMemo/${userId}`);

export const getSelectedMemo = (memoId) => axios.get(`/memo/getMemo/${memoId}`);

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

//day-of-week
export const getSUN = (userId) => axios.get(`/memo/getSunday/${userId}`);
export const getMON = (userId) => axios.get(`/memo/getMonday/${userId}`);
export const getTUE = (userId) => axios.get(`/memo/getTuesday/${userId}`);
export const getWED = (userId) => axios.get(`/memo/getWednesday/${userId}`);
export const getTHU = (userId) => axios.get(`/memo/getThursday/${userId}`);
export const getFRI = (userId) => axios.get(`/memo/getFriday/${userId}`);
export const getSAT = (userId) => axios.get(`/memo/getSaturday/${userId}`);

//ThemeTags
export const getThemeApi = (userId) => axios.get(`memo/getTheme/${userId}`);
export const getPlaceApi = (userId) => axios.get(`memo/getPlace/${userId}`);
export const getPeopleApi = (userId) => axios.get(`memo/getPeople/${userId}`);
