import axios from "../config/axios";

export const getThemeTagsByUserId = (userId) =>
  axios.get(`tags/themeTags/${userId}`);

export const getPlaceTagsByUserId = (userId) =>
  axios.get(`tags/placeTags/${userId}`);

export const getPeopleTagsByUserId = (userId) =>
  axios.get(`tags/peopleTags/${userId}`);

//addTags
export const createThemeTag = (userId, newTagData) =>
  axios.post(`/tags/createTheme/${userId}`, newTagData);

export const createPlaceTag = (userId, newTagData) =>
  axios.post(`/tags/createPlace/${userId}`, newTagData);

export const createPeopleTag = (userId, newTagData) =>
  axios.post(`/tags/createPeople/${userId}`, newTagData);
