import { useState } from "react";
import { createContext } from "react";

import * as tagsApi from "../../../api/tags";

export const TagsContext = createContext();

export default function TagsContextProvider({ children }) {
  const [theme, setTheme] = useState({});
  const [place, setPlace] = useState({});
  const [people, setPeople] = useState({});

  const getThemeByUserId = async (userId) => {
    const res = await tagsApi.getThemeTagsByUserId(userId);
    setTheme(res.data);
  };

  const getPlaceByUserId = async (userId) => {
    const res = await tagsApi.getPlaceTagsByUserId(userId);
    setPlace(res.data);
  };

  const getPeopleByUserId = async (userId) => {
    const res = await tagsApi.getPeopleTagsByUserId(userId);
    setPeople(res.data);
  };

  //create
  const createThemeTagByUserId = async (userId, newTagData) => {
    try {
      const res = await tagsApi.createThemeTag(userId, newTagData);
      console.log("fromTagContext", res);
    } catch (err) {
      console.log(err);
    }
  };

  const createPlaceTagByUserId = async (userId, newTagData) => {
    try {
      const res = await tagsApi.createPlaceTag(userId, newTagData);
      console.log("fromTagContext", res);
    } catch (err) {
      console.log(err);
    }
  };

  const createPeopleTagByUserId = async (userId, newTagData) => {
    try {
      const res = await tagsApi.createPeopleTag(userId, newTagData);
      console.log("fromTagContext", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TagsContext.Provider
      value={{
        getThemeByUserId,
        theme,
        getPlaceByUserId,
        place,
        getPeopleByUserId,
        people,
        createThemeTagByUserId,
        createPlaceTagByUserId,
        createPeopleTagByUserId,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
}
