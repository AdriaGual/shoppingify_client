import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { addItemToList, findActiveList } from "../api/lists";
import toast, { Toaster } from "react-hot-toast";

interface ItemParams {
  id: number;
  name: string;
}

function Item(props: ItemParams) {
  const { data: activeList, refetch } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  function handleAddItemToList() {
    refetch();
    addItemToList(props.id, activeList.id);
    toast.success(props.name + " is on " + activeList.name, {
      id: props.id.toString(),
    });
  }

  return (
    <div className="flex bg-white rounded-xl shadow-sm ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="text-xl p-4 w-full">{props.name}</div>
      <button
        className="hover:bg-mainYellow rounded-r-xl m-auto"
        onClick={() => handleAddItemToList()}
      >
        <div className="py-4 w-12 pl-2">
          <MdOutlineAdd size={28} color="gray"></MdOutlineAdd>
        </div>
      </button>
    </div>
  );
}

export default Item;
