import React from "react";
import MoodTrackerLogo02 from "../../components/MoodTrackerLogo02";
import LoginForm from "../../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-[430px] h-[930px] bg-white mx-auto flex items-center justify-center rounded-xl ">
      <div className="flex flex-col justify-center items-center gap-6">
        <MoodTrackerLogo02 />
        <LoginForm />
      </div>
    </div>
  );
}
