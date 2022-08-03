import React from "react";
import LeftPanel from "./LeftPanel";
import MainTopBar from "./MainTopBar";
import { useQuery } from "react-query";
import { getCategoriesWithItems } from "../api/categories";
import BeatLoader from "react-spinners/BeatLoader";

function MainScreen() {
  const {
    data: categoriesWithItems,
    error,
    isLoading,
  } = useQuery(["categories"], getCategoriesWithItems);

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
      <MainTopBar></MainTopBar>
      <div className="w-1/4 bg-yellowBg">sdfdf</div>
    </div>
  );
}

export default MainScreen;
