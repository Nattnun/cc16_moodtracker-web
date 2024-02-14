import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Container() {
  return (
    <div className="w-[430px] min-h-screen bg-white mx-auto flex flex-col items-center justify-center rounded-xl gap-8 ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
