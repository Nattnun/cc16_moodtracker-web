import React from "react";

export default function TextAreaInput({ placeholder, onChange, value }) {
  return (
    <textarea
      rows="5"
      className="textarea textarea-ghost text-xl resize-none focus:bg-transparent focus:border-none placeholder-black "
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}
