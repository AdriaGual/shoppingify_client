import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopItemsCategories } from "../api/items";
import BeatLoader from "react-spinners/BeatLoader";

function StatisticsTopItemsCategories() {
  const {
    data: topItemsCategories,
    error,
    isLoading,
  } = useQuery(["top_items_categories"], () => getTopItemsCategories());

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
    <div className="flex flex-row px-20">
      <div className="w-1/3">
        <div className="font-semibold text-2xl mb-12">Top items</div>
        <div className="space-y-8">
          {topItemsCategories.top_items.map((topItem) => {
            return (
              <div key={topItem.item_id}>
                <div className="flex mb-2">
                  <div className="font-semibold w-full">{topItem.name}</div>
                  <div
                    key={topItem.item_id}
                    className="font-semibold text-lg w-1/6"
                  >
                    {topItem.percentage} %
                  </div>
                </div>
                <div className="w-full bg-gray h-2 rounded-full">
                  <div
                    className={"bg-mainYellow h-2 rounded-full"}
                    style={{ width: topItem.percentage + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="w-1/3">
        <div className="font-semibold text-2xl mb-12">Top categories</div>
        <div className="space-y-8">
          {topItemsCategories.top_categories.map((topCategory) => {
            return (
              <div key={topCategory.item_id}>
                <div className="flex mb-2">
                  <div className="font-semibold w-full">{topCategory.name}</div>
                  <div
                    key={topCategory.item_id}
                    className="font-semibold text-lg w-1/6"
                  >
                    {topCategory.percentage} %
                  </div>
                </div>
                <div className="w-full bg-gray h-4rounded-full">
                  <div
                    className={"bg-blue h-2 rounded-full"}
                    style={{ width: topCategory.percentage + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatisticsTopItemsCategories;
