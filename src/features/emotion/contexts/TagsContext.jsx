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
    setTheme(res);
  };

  const getPlaceByUserId = async (userId) => {
    const res = await tagsApi.getPlaceTagsByUserId(userId);
    setPlace(res);
  };

  const getPeopleByUserId = async (userId) => {
    const res = await tagsApi.getPeopleTagsByUserId(userId);
    setPeople(res);
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
      }}
    >
      {children}
    </TagsContext.Provider>
  );
}
