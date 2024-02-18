import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";
import ChartSandwich from "../../components/ChartSandwich";

export default function PeopleTagsPage() {
  const { authUser } = useContext(AuthContext);
  const { getPeople, people } = useContext(MemoContext);

  useEffect(() => {
    getPeople(authUser.id);
  }, []);

  return (
    <div className="h-[930px] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold text-center px-8">
        Who you were with and how you felt
      </div>
      <div className="h-[3rem]"></div>
      <ChartSandwich data={people} />
    </div>
  );
}
