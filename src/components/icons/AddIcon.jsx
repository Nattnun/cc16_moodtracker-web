import React from "react";

export default function AddIcon({ className, stroke = "black" }) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.5 13.75L27.5 41.25"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M41.25 27.5L13.75 27.5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
