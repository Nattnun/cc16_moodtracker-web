import React from "react";

export default function TagsItemList({
  name,
  tagsData,
  tagsId,
  color,
  onClick,
  onAdd,
  onDelete,
}) {
  return (
    <div>
      <h3 className="text-xl font-medium">{name}</h3>
      <div className="flex flex-wrap gap-1">
        {tagsData?.map((el) => {
          console.log(el.id == tagsId);
          return (
            <button
              key={el.id}
              value={el.id}
              onClick={onClick}
              style={{
                background: `${tagsId == el.id ? color : ""}`,
              }}
              className={`border px-[1rem] rounded-full`}
            >
              {el.name}
            </button>
          );
        })}
        <button
          value={null}
          onClick={onClick}
          style={{ background: `${!tagsId ? color : ""}` }}
          className={`border px-[1rem] rounded-full`}
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
