import React from "react";
import NavBar2 from "../../layouts/NavBar2";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[430px] h-screen bg-white mx-auto flex flex-col items-center justify-center rounded-xl">
        <NavBar2 onClick={() => navigate(-1)} />

        <div className="w-[288px] h-[288px] bg-gray-300 rounded-full flex justify-center items-center">
          <div className=" w-[238px] h-[238px] bg-white rounded-full flex justify-center items-center">
            <div className=" text-5xl">{authUser.displayName}</div>
          </div>
        </div>
      </div>
    </>
  );
}
