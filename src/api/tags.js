import axios from "../config/axios";

export const getThemeTagsByUserId = (userId) =>
  axios.get(`tags/themeTags/${userId}`);

export const getPlaceTagsByUserId = (userId) =>
  axios.get(`tags/placeTags/${userId}`);

export const getPeopleTagsByUserId = (userId) =>
  axios.get(`tags/peopleTags/${userId}`);
