import React from "react";
import source from "../images/source.svg";
import { useQuery } from "@tanstack/react-query";
import { findActiveList } from "../api/lists";
import BeatLoader from "react-spinners/BeatLoader";

function MainRightPanel() {
  const {
    data: activeList,
    error,
    isLoading,
  } = useQuery(["active_list", localStorage.getItem("user_id")], () =>
    findActiveList(localStorage.getItem("user_id"))
  );
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
  console.log(activeList);
  return (
    <div className="w-96 bg-yellowBg py-8 px-10 space-y-10">
      <div className="grid grid-cols-3 w-full bg-darkRed rounded-2xl h-32 relative">
        <div className="col-span-1">
          <img src={source} alt="logo" className="absolute source"></img>
        </div>
        <div className="col-span-2 m-auto">
          <div className="text-white font-semibold text-lg">
            Didn't find what you need?
          </div>
          <button className="bg-white px-8 py-3 rounded-xl text-sm w-32 font-bold">
            Add item
          </button>
        </div>
      </div>
      <div className="flex font-semibold text-2xl">
        <div className="w-full">{activeList.name}</div>
        <div>sdf</div>
      </div>
    </div>
  );
}

export default MainRightPanel;
