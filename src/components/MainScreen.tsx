import React from "react";
import LeftPanel from "./LeftPanel";
import MainTopBar from "./MainTopBar";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesWithItems } from "../api/categories";
import BeatLoader from "react-spinners/BeatLoader";
import MainItems from "./MainItems";
import MainRightPanel from "./MainRightPanel";
import { itemStore } from "../store/ItemStore";
import MainRightDetailsPanel from "./MainRightDetailsPanel";
import MainRightCreateItemPanel from "./MainRightCreateItemPanel";

function MainScreen() {
  const { error, isLoading } = useQuery(["categories"], getCategoriesWithItems);
  const { showDetails } = itemStore();

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
    <div className="flex flex-no-wrap">
      <LeftPanel></LeftPanel>
      <div className="mt-10 mx-20 space-y-12 w-2/3">
        <MainTopBar></MainTopBar>
        <MainItems></MainItems>
      </div>
      {showDetails === 1 ? (
        <MainRightDetailsPanel></MainRightDetailsPanel>
      ) : showDetails === 0 ? (
        <MainRightPanel></MainRightPanel>
      ) : (
        <MainRightCreateItemPanel></MainRightCreateItemPanel>
      )}
    </div>
  );
}

export default MainScreen;
