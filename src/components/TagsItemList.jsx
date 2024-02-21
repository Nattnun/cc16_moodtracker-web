import React from "react";
import CircleXIcon from "../components/icons/CicleXIcon";
import TrashIcon from "../components/icons/TrashIcon";
import Modal from "../components/Modal";
import { useState } from "react";

export default function TagsItemList({
  name,
  tagsData,
  tagsId,
  color,
  onClick,
  onAdd,
  onDelete,
  modalId,
  selectName,
}) {
  const [input, setInput] = useState({});

  const handleOnAdd = async (value) => {
    await onAdd(value);
    setInput({ ...input, name: "" });
    document.getElementById(`my_modal_${name}_${modalId}`).close();
  };

  const handleOnChange = (e) => {
    setInput({ ...input, name: e.target.value });
  };

  return (
    <div className="z-0">
      <h3 className="text-xl font-medium">{name}</h3>
      <div className="flex flex-wrap gap-1 ">
        {tagsData?.map((el) => {
          return (
            <div key={el.id}>
              <button
                value={el.id}
                onClick={onClick}
                name={el.name}
                style={{
                  background: `${tagsId == el.id ? color : ""}`,
                }}
                className={
                  tagsId == el.id
                    ? ` z-0 relative flex border pl-[1rem] pr-[2.25rem] py-[0.25rem] rounded-full justify-center items-center gap-2 `
                    : ` z-0 relative flex border px-[1rem] py-[0.25rem] rounded-full justify-center items-center gap-2 `
                }
              >
                {el.name}
                {tagsId == el.id ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      document
                        .getElementById(`my_DELETE_modal_${name}_${modalId}`)
                        .showModal();
                    }}
                    className=" absolute right-1.5 w-[22px] h-[22px] flex bg-white rounded-full justify-center items-center"
                  >
                    <TrashIcon />
                  </div>
                ) : null}
              </button>
            </div>
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
        <button
          onClick={() =>
            document.getElementById(`my_modal_${name}_${modalId}`).showModal()
          }
          className="border border-black px-[1rem] rounded-full"
        >
          Add+
        </button>
      </div>

      <dialog
        id={`my_modal_${name}_${modalId}`}
        className="modal w-[420px] mx-auto"
      >
        <div className="modal-box  flex flex-col gap-8 justify-center items-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className=" font-semibold text-2xl text-center">
            Add your {name} tag
          </h3>
          <input
            type="text"
            onChange={handleOnChange}
            value={input.name}
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs focus:border-none"
          />
          <div
            role="button"
            onClick={() => handleOnAdd(input)}
            style={{ background: color }}
            className="btn w-[275px]"
          >
            ADD
          </div>
        </div>
      </dialog>
      <dialog
        id={`my_DELETE_modal_${name}_${modalId}`}
        className="modal w-[420px] mx-auto"
      >
        <div className="modal-box  flex flex-col gap-8 justify-center items-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className=" font-semibold text-2xl text-center">
            Are you sure you want to delete {selectName} tag
          </h3>

          <div role="button" className="btn w-[275px] bg-angryRed">
            DELETE
          </div>
        </div>
      </dialog>
    </div>
  );
}
