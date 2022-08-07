import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { MdClose, MdModeEditOutline } from "react-icons/md";
import Modal from "react-modal";
import { findActiveList, updateList } from "../api/lists";
import source from "../images/source.svg";
import { itemStore } from "../store/ItemStore";
import Error from "./Error";
import Loading from "./Loading";
import MainRightPanelItems from "./MainRightPanelItems";
import MainRightPanelListOptions from "./MainRightPanelListOptions";

function MainRightPanel() {
  const {
    data: activeList,
    error,
    isLoading,
    refetch,
  } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  const { setId, setName, setCategory, setNote, setImage, setShowDetails } =
    itemStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const changedName = useRef<HTMLInputElement>(null);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openAddItemPanel() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(2);
  }

  async function handleChangeItemListName() {
    await updateList(
      activeList.id,
      changedName.current?.value,
      localStorage.getItem("user_id")
    );
    refetch();
    closeModal();
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="bg-yellowBg flex flex-col">
      <div className="flex-grow py-8 px-10 space-y-10">
        <div className="grid grid-cols-3 w-full bg-darkRed rounded-2xl h-32 relative">
          <div className="col-span-1">
            <img src={source} alt="logo" className="absolute source"></img>
          </div>
          <div className="col-span-2 m-auto space-y-1">
            <div className="text-white font-semibold text-lg leading-1 leading-snug">
              Didn't find what you need?
            </div>
            <button
              className="bg-white px-8 py-3 rounded-xl text-sm w-32 font-bold"
              onClick={() => openAddItemPanel()}
            >
              Add item
            </button>
          </div>
        </div>
        <div className="flex font-bold text-2xl">
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="bg-white rounded-2xl p-8 w-1/3 h-1/4 shadow-md modal"
            overlayClassName="Overlay"
            appElement={document.getElementById("root") as HTMLElement}
          >
            <div className="flex w-full">
              <div className="flex w-full">
                <div className="text-2xl w-full font-semibold">
                  Change list name
                </div>

                <div>
                  <button onClick={closeModal}>
                    <MdClose size={32}></MdClose>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <input
                ref={changedName}
                placeholder={activeList.name}
                className="shadow-sm rounded-xl p-4 w-full border-2 text-sm border-gray outline-mainYellow"
              />
            </div>

            <div className="flex w-full space-x-8 mt-6">
              <div className="w-full"></div>
              <button
                className="text-sm m-auto font-semibold"
                onClick={closeModal}
              >
                cancel
              </button>
              <button
                className="px-8 py-4 bg-red rounded-xl text-white font-semibold"
                onClick={() => handleChangeItemListName()}
              >
                Yes
              </button>
            </div>
          </Modal>
          <div className="w-full">{activeList.name}</div>
          <button className="m-auto" onClick={() => openModal()}>
            <MdModeEditOutline></MdModeEditOutline>
          </button>
        </div>
        <div className="space-y-8">
          {activeList.categories.map((category) => {
            return (
              <MainRightPanelItems
                key={category.id}
                id={category.id}
                name={category.name}
                items={category.items}
              ></MainRightPanelItems>
            );
          })}
        </div>
      </div>
      <MainRightPanelListOptions></MainRightPanelListOptions>
    </div>
  );
}

export default MainRightPanel;
