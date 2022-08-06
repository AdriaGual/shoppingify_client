import React, { useState } from "react";
import { MdDeleteOutline, MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import {
  findActiveList,
  removeItemFromList,
  updateItemQuantity,
} from "../api/lists";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

interface ItemParams {
  id: number;
  quantity: number;
}

function MainRightPanelItemButton(props: ItemParams) {
  const [editButton, setEditButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: activeList, refetch } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleRemoveItemFromList() {
    await removeItemFromList(props.id, activeList.id);
    refetch();
    closeModal();
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
      <div className="flex justify-center items-center">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="bg-white rounded-2xl p-8 w-1/3 h-1/4 shadow-md modal"
          overlayClassName="Overlay"
          appElement={document.getElementById("root") as HTMLElement}
        >
          <div className="flex w-full h-4/6">
            <div className="text-2xl w-full font-semibold">
              Are you sure that you want to delete this item?
            </div>
            <div>
              <button onClick={closeModal}>
                <MdClose size={32}></MdClose>
              </button>
            </div>
          </div>
          <div className="flex w-full space-x-8">
            <div className="w-full"></div>
            <button
              className="text-sm m-auto font-semibold"
              onClick={closeModal}
            >
              cancel
            </button>
            <button
              className="px-8 py-4 bg-red rounded-xl text-white font-semibold"
              onClick={() => handleRemoveItemFromList()}
            >
              Yes
            </button>
          </div>
        </Modal>
      </div>
      {editButton ? (
        <div className="flex w-52 bg-white rounded-xl space-x-2">
          <button className="bg-mainYellow rounded-xl px-1">
            <MdDeleteOutline
              size={24}
              color="white"
              onClick={() => openModal()}
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
