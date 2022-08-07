import { useQuery } from "@tanstack/react-query";
import { MdOutlineDateRange } from "react-icons/md";
import { listStore } from "../store/ListStore";
import { findListItems } from "../api/lists";
import { MdOutlineArrowBack } from "react-icons/md";
import Loading from "./Loading";
import Error from "./Error";

function HistoryListsDetails() {
  const {
    id,
    name,
    day,
    date,
    setId,
    setName,
    setDay,
    setDate,
    setShowDetails,
  } = listStore();

  const {
    data: listDetails,
    isLoading,
    error,
  } = useQuery(["list_details"], () => findListItems(id));

  function resetListDetails() {
    setId(0);
    setName("");
    setDay("");
    setDate("");
    setShowDetails(0);
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <div className="my-10 mx-20 space-y-12 w-2/3">
      <button className="flex space-x-2" onClick={() => resetListDetails()}>
        <MdOutlineArrowBack className="text-mainYellow my-auto"></MdOutlineArrowBack>
        <div className="text-sm text-mainYellow font-semibold m-auto">back</div>
      </button>
      <div>
        <div className="text-3xl font-bold mb-4">{name}</div>
        <div className="flex space-x-2 font-semibold mb-8">
          <div className="text-gray my-auto">
            <MdOutlineDateRange size={24}></MdOutlineDateRange>
          </div>
          <div className="text-gray my-auto">{day.substring(0, 3)}</div>
          <div className="text-gray my-auto">{date}</div>
        </div>
        <div className="font-semibold">
          {listDetails.categories.map((category) => {
            const items: any = category.items;
            return items.length > 0 ? (
              <div key={category.id}>
                <div className="text-2xl">{category.name}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
                  {items.map((item) => {
                    return (
                      <div
                        className="flex bg-white rounded-xl shadow-sm mt-4"
                        key={item.id}
                      >
                        <div className="text-xl p-4 w-full">{item.name}</div>
                        <div className="my-auto text-mainYellow font-semibold w-1/4">
                          {item.pivot.quantity} pcs
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div key={category.id}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoryListsDetails;
