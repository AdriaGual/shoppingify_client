import React from "react";
import { MdOutlineAdd } from "react-icons/md";

interface ItemParams {
  id: number;
  name: string;
}

function Item(props: ItemParams) {
  return (
    <div className="grid grid-cols-6 bg-white rounded-xl shadow-sm">
      <div className="text-xl p-4 col-span-5">{props.name}</div>
      <button
        className="hover:bg-mainYellow rounded-r-xl"
        onClick={() => console.log(props.id)}
      >
        <div className="py-4 pl-2">
          <MdOutlineAdd size={28} color="gray"></MdOutlineAdd>
        </div>
      </button>
    </div>
  );
}

export default Item;
