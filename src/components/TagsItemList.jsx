import React from "react";

export default function TagsItemList({
  name,
  themeData,
  themeId,
  color,
  onClick,
  onAdd,
  onDelete,
}) {
  return (
    <div>
      <h3 className="text-xl font-medium">{name}</h3>
      <div className="flex flex-wrap gap-1">
        {themeData.map((el) => {
          return (
            <button
              key={el.id}
              value={el.id}
              onClick={onClick}
              className={`border px-[1rem] rounded-full ${
                { themeId } == el.id ? `bg-${color}` : null
              }`}
            >
              {el.name}
            </button>
          );
        })}
        <button
          value={null}
          className={`border px-[1rem] rounded-full ${
            !{ themeId } ? `bg-${color}` : null
          }`}
        >
          none
        </button>
        <button className="border border-black px-[1rem] rounded-full">
          Add+
        </button>
      </div>
    </div>
  );
}
