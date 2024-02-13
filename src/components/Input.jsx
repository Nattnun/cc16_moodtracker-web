import React from "react";

export default function Input({
  type = "text",
  name,
  placeholder,
  label,
  errorMessage,
  value,
  onChange,
}) {
  const defaultClass =
    "input bg-gray-100 w-full max-w-xs rounded-md text-sm font-light";

  const extendedClass = errorMessage ? "border  border-red-500" : "";

  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`${defaultClass} ${extendedClass}`}
        />
        {errorMessage ? (
          <small className="text-red-500">{errorMessage}</small>
        ) : null}
      </label>
    </>
  );
}
