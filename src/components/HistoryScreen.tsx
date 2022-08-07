import { itemStore } from "../store/ItemStore";
import HistoryLists from "./HistoryLists";
import LeftPanel from "./LeftPanel";
import MainRightCreateItemPanel from "./MainRightCreateItemPanel";
import MainRightDetailsPanel from "./MainRightDetailsPanel";
import MainRightPanel from "./MainRightPanel";

function HistoryScreen() {
  const { showDetails } = itemStore();

  return (
    <div className="flex flex-no-wrap">
      <LeftPanel></LeftPanel>
      <HistoryLists></HistoryLists>
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

export default HistoryScreen;
