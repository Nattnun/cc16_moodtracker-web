import React from "react";

export default function Button({ children }) {
  return (
    <button className="btn bg-black rounded-full w-full text-white">
      {children}
    </button>
  );
}
