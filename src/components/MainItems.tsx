import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";
function MainItems() {
  const queryClient = useQueryClient();

  console.log(queryClient.getQueryData(["categories"]));

  const categories: any = queryClient.getQueryData(["categories"]);

  return (
    <div className="font-semibold">
      {categories.map((category) => {
        const items: any = category.items;
        console.log(items.length > 0);
        return items.length > 0 ? (
          <div key={category.id}>
            <div className="text-2xl pb-4">{category.name}</div>
            <div className="flex space-x-4">
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex py-4 px-4 bg-white rounded-xl shadow-sm w-52 mb-16"
                  >
                    <div className="text-xl w-full">{item.name}</div>
                    <MdOutlineAdd size={28} color="gray"></MdOutlineAdd>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
}

export default MainItems;
