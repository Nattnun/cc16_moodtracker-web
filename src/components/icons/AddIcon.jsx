import React from "react";

export default function AddIcon({ className }) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.5 13.75L27.5 41.25"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M41.25 27.5L13.75 27.5"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
