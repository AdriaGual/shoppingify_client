import React from "react";
import LeftPanel from "./LeftPanel";
import MainTopBar from "./MainTopBar";

function MainScreen() {
  return (
    <div className="flex flex-no-wrap">
      <LeftPanel></LeftPanel>
      <MainTopBar></MainTopBar>
      <div className="w-1/4 bg-yellowBg">sdfdf</div>
    </div>
  );
}

export default MainScreen;
