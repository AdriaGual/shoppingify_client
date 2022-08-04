import React from "react";
import source from "../images/source.svg";
import { useQuery } from "@tanstack/react-query";
import { findActiveList } from "../api/lists";
import BeatLoader from "react-spinners/BeatLoader";
import { MdModeEditOutline } from "react-icons/md";
import MainRightPanelItems from "./MainRightPanelItems";
import { itemStore } from "../store/ItemStore";

function MainRightPanel() {
  const {
    data: activeList,
    error,
    isLoading,
  } = useQuery(["active_list"], () =>
    findActiveList(localStorage.getItem("user_id"))
  );

  const { setId, setName, setCategory, setNote, setImage, setShowDetails } =
    itemStore();

  function openAddItemPanel() {
    setId(0);
    setName("");
    setCategory(0);
    setNote("");
    setImage("");
    setShowDetails(2);
  }

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="space-y-4">
          <span className="text-2xl font-semibold">
            Loading, please wait...
          </span>
          <div className="flex justify-center w-full">
            <BeatLoader color="#F9A109" size={40} speedMultiplier={0.5} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="space-y-4">
          <span className="text-2xl font-semibold">
            An error just occurred, please try again :(
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 bg-yellowBg py-8 px-10 space-y-10">
      <div className="grid grid-cols-3 w-full bg-darkRed rounded-2xl h-32 relative">
        <div className="col-span-1">
          <img src={source} alt="logo" className="absolute source"></img>
        </div>
        <div className="col-span-2 m-auto">
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
        <div className="w-full">{activeList.name}</div>
        <div className="m-auto">
          <MdModeEditOutline></MdModeEditOutline>
        </div>
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
  );
}

export default MainRightPanel;
