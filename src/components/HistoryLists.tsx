import React from "react";
import { useQuery } from "@tanstack/react-query";
import { findListsByMonthYear } from "../api/lists";
import BeatLoader from "react-spinners/BeatLoader";
import { MdOutlineDateRange, MdOutlineArrowForwardIos } from "react-icons/md";

function HistoryLists() {
  const {
    data: historyLists,
    refetch,
    error,
    isLoading,
  } = useQuery(["history_lists"], () =>
    findListsByMonthYear(localStorage.getItem("user_id"))
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

  return (
    <div className="my-10 mx-20 space-y-12 w-2/3">
      <div className="text-3xl font-bold">Shopping history</div>
      {historyLists.map((monthLists) => {
        return (
          <div>
            <div className="font-semibold mb-6">
              {monthLists[0].month} {monthLists[0].year}
            </div>
            <div className="space-y-8">
              {monthLists.map((list) => {
                return (
                  <div className="flex w-full bg-white shadow-sm rounded-xl p-6">
                    <div className="font-bold text-xl my-auto w-2/3">
                      {list.name}
                    </div>
                    <div className="flex w-1/3 space-x-12">
                      <div className="flex space-x-2">
                        <div className="text-gray my-auto">
                          <MdOutlineDateRange size={24}></MdOutlineDateRange>
                        </div>
                        <div className="text-gray my-auto">
                          {list.day.substring(0, 3)}
                        </div>
                        <div className="text-gray my-auto">
                          {list.created_at}
                        </div>
                      </div>

                      {list.canceled ? (
                        <div className="text-red border-2 border-red rounded-xl py-1 px-2 my-auto">
                          cancelled
                        </div>
                      ) : (
                        <div className="text-blue border-2 border-blue rounded-xl py-1 px-2 my-auto">
                          completed
                        </div>
                      )}
                      <div className="w-full"></div>
                      <button className="my-auto text-mainYellow">
                        <MdOutlineArrowForwardIos
                          size={20}
                        ></MdOutlineArrowForwardIos>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryLists;
