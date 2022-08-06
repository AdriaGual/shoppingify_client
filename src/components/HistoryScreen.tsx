import React from "react";
import LeftPanel from "./LeftPanel";
import MainRightPanel from "./MainRightPanel";
import HistoryLists from "./HistoryLists";

function HistoryScreen() {
  return (
    <div className="flex flex-no-wrap">
      <LeftPanel></LeftPanel>
      <HistoryLists></HistoryLists>

      <MainRightPanel></MainRightPanel>
    </div>
  );
}

export default HistoryScreen;
