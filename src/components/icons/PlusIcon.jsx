import React from "react";

export default function PlusIcon({ className }) {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="34" cy="34" r="34" fill="#141416" />
      <path
        d="M34 19L34 49"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M49 34L19 34"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
