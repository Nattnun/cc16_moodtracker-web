import React from "react";
import MoodTrackerLogo01 from "../../components/MoodTrackerLogo01";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <Link to="/login">
      <div className="w-[430px] h-screen bg-white mx-auto flex items-center justify-center rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <MoodTrackerLogo01 />
          <p className=" text-2xl mt-[17px]">Tap Anywhere to start!</p>
        </div>
      </div>
    </Link>
  );
}
