import React, { useState } from "react";
import { MdDeleteOutline, MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import {
  findActiveList,
  removeItemFromList,
  updateItemQuantity,
} from "../api/lists";

interface ItemParams {
  id: number;
  quantity: number;
}

function MainRightPanelItemButton(props: ItemParams) {
  const [editButton, setEditButton] = useState(false);

  const { data: activeList, refetch } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  async function handleRemoveItemFromList() {
    await removeItemFromList(props.id, activeList.id);
    refetch();
  }

  async function decreaseQuantity() {
    if (props.quantity > 1) {
      var quantity = props.quantity - 1;
      await updateItemQuantity(props.id, activeList.id, quantity);
      refetch();
    }
  }

  async function increaseQuantity() {
    var quantity = props.quantity + 1;
    await updateItemQuantity(props.id, activeList.id, quantity);
    refetch();
  }

  function handleEditButton() {
    setEditButton(!editButton);
  }

  return (
    <>
      {editButton ? (
        <div className="flex w-52 bg-white rounded-xl space-x-2">
          <button className="bg-mainYellow rounded-xl px-1">
            <MdDeleteOutline
              size={24}
              color="white"
              onClick={() => handleRemoveItemFromList()}
            ></MdDeleteOutline>
          </button>
          <div className="flex p-2">
            <button onClick={() => decreaseQuantity()}>
              <MdOutlineRemove
                size={28}
                className="text-mainYellow"
              ></MdOutlineRemove>
            </button>
            <button
              className="flex w-16 text-sm border-2 rounded-full text-mainYellow h-10"
              onClick={() => handleEditButton()}
            >
              <div className="m-auto">{props.quantity} pcs</div>
            </button>
            <button onClick={() => increaseQuantity()}>
              <MdOutlineAdd
                size={28}
                className="text-mainYellow"
              ></MdOutlineAdd>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="flex w-32 py-2 px-5 text-sm border-2 rounded-full text-mainYellow h-10"
          onClick={() => handleEditButton()}
        >
          <div className="m-auto">{props.quantity} pcs</div>
        </button>
      )}
    </>
  );
}

export default MainRightPanelItemButton;
