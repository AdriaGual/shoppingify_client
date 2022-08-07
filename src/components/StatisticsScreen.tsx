import React from "react";
import LeftPanel from "./LeftPanel";
import MainRightPanel from "./MainRightPanel";
import StatisticsSummary from "./StatisticsSummary";

function StatisticsScreen() {
  return (
    <div className="flex flex-no-wrap">
      <LeftPanel></LeftPanel>
      <StatisticsSummary></StatisticsSummary>
      <MainRightPanel></MainRightPanel>
    </div>
  );
}

export default StatisticsScreen;
