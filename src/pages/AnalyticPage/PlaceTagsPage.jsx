import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { MemoContext } from "../../features/emotion/contexts/MemoContext";
import { useEffect } from "react";
import ChartSandwich from "../../components/ChartSandwich";

export default function PlaceTagsPage() {
  const { authUser } = useContext(AuthContext);
  const { getPlace, place } = useContext(MemoContext);

  useEffect(() => {
    getPlace(authUser.id);
  }, []);

  return (
    <div className="h-[930px] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold text-center px-8">
        Where you were and how you felt
      </div>
      <div className="h-[3rem]"></div>
      <ChartSandwich data={place} />
    </div>
  );
}
