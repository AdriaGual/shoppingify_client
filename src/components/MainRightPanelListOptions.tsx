import React, { useState } from "react";
import {
  findActiveList,
  cancelCompleteList,
  createDefaultList,
} from "../api/lists";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

function MainRightPanelListOptions() {
  const { data: activeList, refetch } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  function openModal(isCancel: boolean) {
    setIsCancel(isCancel);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleCancelCompleteList() {
    await cancelCompleteList(activeList.id, isCancel);
    await createDefaultList(localStorage.getItem("user_id"));
    if (isCancel) {
      toast.success(activeList.name + " has been cancelled");
    } else {
      toast.success(activeList.name + " has been completed");
    }
    closeModal();
    refetch();
  }

  return (
    <div className="flex h-32 bg-white justify-center">
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
            Are you sure that you want to {isCancel ? "cancel " : " complete "}
            this list?
          </div>
          <div>
            <button onClick={closeModal}>
              <MdClose size={32}></MdClose>
            </button>
          </div>
        </div>
        <div className="flex w-full space-x-8">
          <div className="w-full"></div>
          <button className="text-sm m-auto font-semibold" onClick={closeModal}>
            cancel
          </button>
          <button
            className={
              isCancel
                ? "px-8 py-4 bg-red rounded-xl text-white font-semibold"
                : "px-8 py-4 bg-blue rounded-xl text-white font-semibold"
            }
            onClick={() => handleCancelCompleteList()}
          >
            Yes
          </button>
        </div>
      </Modal>
      <div className="flex space-x-10">
        <button className="m-auto font-bold" onClick={() => openModal(true)}>
          cancel
        </button>
        <button
          className="m-auto font-bold py-4 px-6 bg-blue rounded-xl text-white"
          onClick={() => openModal(false)}
        >
          Complete
        </button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default MainRightPanelListOptions;
