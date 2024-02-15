import React from "react";

export default function TextAreaInput({ placeholder }) {
  return (
    <textarea
      className="textarea textarea-ghost text-xl resize-none focus:bg-transparent focus:border-none placeholder-black "
      placeholder={placeholder}
    ></textarea>
  );
}
