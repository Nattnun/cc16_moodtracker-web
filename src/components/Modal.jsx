import React from "react";
import XIcon from "./icons/XIcon";

export default function Modal({ title, children, onClose, width }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-70"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full py-8 ">
          <div
            className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] max-h-[calc(100vh-10rem)] flex flex-col"
            style={{ width: `${width}rem` }}
          >
            <div className="flex flex-col relative justify-between items-center p-4">
              <button
                onClick={onClose}
                className="absolute right-4 items-end text-2xl"
              >
                <XIcon />
              </button>
              <div className="text-3xl font-semibold text-center pt-8">
                {title}{" "}
              </div>
            </div>
            <div className=" overflow-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
