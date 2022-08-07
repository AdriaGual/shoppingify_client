import React from "react";
import StatisticsTopItemsCategories from "./StatisticsTopItemsCategories";
import { useQuery } from "@tanstack/react-query";
import { getTopItemsCategories } from "../api/items";
import BeatLoader from "react-spinners/BeatLoader";
import Loading from "./Loading";
import Error from "./Error";

function StatisticsSummary() {
  const {
    data: topItemsCategories,
    error,
    isLoading,
  } = useQuery(["top_items_categories"], () => getTopItemsCategories());

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="my-10 mx-20 space-y-12 w-2/3 px-20">
      <StatisticsTopItemsCategories></StatisticsTopItemsCategories>
      <div className="font-semibold text-2xl mb-12">Monthly summary</div>
    </div>
  );
}

export default StatisticsSummary;
