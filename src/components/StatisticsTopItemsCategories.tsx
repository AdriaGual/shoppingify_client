import { useQuery } from "@tanstack/react-query";
import { getTopItemsCategories } from "../api/items";
import Loading from "./Loading";
import Error from "./Error";

function StatisticsTopItemsCategories() {
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
    <div className="flex flex-row">
      <div className="w-1/3">
        <div className="font-semibold text-2xl mb-12">Top items</div>
        <div className="space-y-8">
          {topItemsCategories.top_items.map((topItem) => {
            return (
              <div key={topItem.item_id}>
                <div className="flex mb-2">
                  <div className="font-semibold w-full">{topItem.name}</div>
                  <div className="font-semibold text-lg w-1/6">
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
              <div key={topCategory.category_id}>
                <div className="flex mb-2">
                  <div className="font-semibold w-full">{topCategory.name}</div>
                  <div className="font-semibold text-lg w-1/6">
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
