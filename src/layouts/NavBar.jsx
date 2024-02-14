import React from "react";
import DotIcon from "../components/icons/DotIcon";
import { useState } from "react";
import ProfileIcon from "../components/icons/ProfileIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import { useContext } from "react";
import { AuthContext } from "../features/auth/contexts/AuthContext";

export default function NavBar() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 bg-red-500 w-[430px] mx-auto">
          <div className="dropdown dropdown-end absolute right-4 top-4">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent border-none shadow-none"
            >
              <DotIcon className="btn bg-transparent border-none shadow-none scale-[2.5]" />
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
                  <div className="">Profile</div>
                </div>
              </li>
              <hr />
              <li>
                <div onClick={() => logout()} className="text-xl">
                  <div className="">
                    <LogoutIcon />
                  </div>
                  <div className="">Logout</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
