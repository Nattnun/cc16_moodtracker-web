import React from "react";
import AddIcon from "../components/icons/AddIcon";
import AnalyticIcon from "../components/icons/AnalyticIcon";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    console.log(location.pathname == "/addEmotion");
  }, []);
  return (
    <div className="relative ">
      <div className="fixed  bottom-0 left-0 right-0  w-[430px] mx-auto pb-4 flex justify-center gap-24">
        <Link to="/addEmotion">
          <div>
            <AddIcon
              stroke={location.pathname === "/addEmotion" ? "gray" : "black"}
              className="btn bg-transparent p-0 border-none shadow-none "
            />
          </div>
        </Link>
        <Link to="/analytic">
          <div>
            <AnalyticIcon
              stroke={location.pathname === "/analytic" ? "gray" : "black"}
              className="btn bg-transparent p-0 border-none shadow-none "
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
