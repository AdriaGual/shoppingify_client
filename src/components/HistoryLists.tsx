import React from "react";
import { listStore } from "../store/ListStore";
import HistoryListsRegisters from "./HistoryListsRegisters";
import HistoryListsDetails from "./HistoryListsDetails";

function HistoryLists() {
  const { showDetails } = listStore();

  return (
    <>
      {showDetails ? (
        <HistoryListsDetails></HistoryListsDetails>
      ) : (
        <HistoryListsRegisters></HistoryListsRegisters>
      )}
    </>
  );
}

export default HistoryLists;
