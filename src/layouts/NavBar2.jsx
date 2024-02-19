import React from "react";
import DotIcon from "../components/icons/DotIcon";
import { useState } from "react";
import ProfileIcon from "../components/icons/ProfileIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import { useContext } from "react";
import { AuthContext } from "../features/auth/contexts/AuthContext";
import BackIcon from "../components/icons/BackIcon";
import { Link } from "react-router-dom";

export default function NavBar2({ path, onClick }) {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <div className="relative z-50">
        <div className="fixed top-0 left-0 right-0 w-[430px] mx-auto">
          <Link to={path}>
            <div onClick={onClick} className="absolute top-6 left-6">
              <BackIcon />
            </div>
          </Link>
          <div className="dropdown dropdown-end absolute right-4 top-4">
            <div
              tabIndex={0}
              role="button"
              className="bg-transparent border-none shadow-none"
            >
              <DotIcon className="btn p-0 bg-transparent border-none shadow-none" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[387px]"
            >
              <li>
                <div className="text-xl">
                  <div className="">
                    <ProfileIcon />
                  </div>
                  <div className=" font-semibold">Profile</div>
                </div>
              </li>
              <hr />
              <li>
                <div onClick={() => logout()} className="text-xl">
                  <div className="">
                    <LogoutIcon />
                  </div>
                  <div className=" font-semibold">Logout</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
