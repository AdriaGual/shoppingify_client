import React from "react";
import LeftPanel from "./LeftPanel";
import MainTopBar from "./MainTopBar";
import { useQuery } from "react-query";
import { getCategoriesWithItems } from "../api/categories";

function MainScreen() {
  const {
    data: categoriesWithItems,
    error,
    isLoading,
  } = useQuery(["categories"], getCategoriesWithItems);

  if (!isLoading) {
    return <div>isLoading</div>;
  }

  if (error) {
    console.log(error);
    return <div>isError</div>;
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
