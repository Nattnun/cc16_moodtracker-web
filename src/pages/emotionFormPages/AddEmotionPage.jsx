import React from "react";
import PlusIcon from "../../components/icons/PlusIcon";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function AddEmotionPage() {
  const { authUser } = useContext(AuthContext);
  console.log(authUser);
  return (
    <div className=" h-min flex flex-col justify-center items-center gap-8">
      <div className=" text-5xl">{authUser.displayName}</div>
      <div className=" text-3xl">WHAT DO YOU FEEL</div>
      <div className="w-[288px] h-[288px] bg-gray-300 rounded-full flex justify-center items-center">
        <div className=" w-[238px] h-[238px] bg-white rounded-full flex justify-center items-center">
          <Link to="/addEmotion/emotionGroup">
            <PlusIcon className="btn bg-transparent border-none shadow-none scale-150 " />
          </Link>
        </div>
      </div>
      <div className=" text-5xl invisible ">{authUser.displayName}</div>
      <div className=" text-3xl invisible">WHAT DO YOU FEEL</div>
    </div>
  );
}
