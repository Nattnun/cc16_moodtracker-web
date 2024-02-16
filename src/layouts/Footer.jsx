import React from "react";
import AddIcon from "../components/icons/AddIcon";
import AnalyticIcon from "../components/icons/AnalyticIcon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative ">
      <div className="fixed  bottom-0 left-0 right-0  w-[430px] mx-auto pb-4 flex justify-center gap-24">
        <Link to="/addEmotion">
          <div>
            <AddIcon className="btn bg-transparent p-0 border-none shadow-none " />
          </div>
        </Link>
        <Link to="/analytic">
          <div>
            <AnalyticIcon className="btn bg-transparent p-0 border-none shadow-none " />
          </div>
        </Link>
      </div>
    </div>
  );
}
