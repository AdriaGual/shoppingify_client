import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";
function MainItems() {
  const queryClient = useQueryClient();

  const categories: any = queryClient.getQueryData(["categories"]);

  return (
    <div className="font-semibold">
      {categories.map((category) => {
        const items: any = category.items;
        return items.length > 0 ? (
          <div key={category.id}>
            <div className="text-2xl pb-4">{category.name}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-6 bg-white rounded-xl shadow-sm"
                  >
                    <div className="text-xl p-4 col-span-5">{item.name}</div>
                    <div className="hover:bg-mainYellow rounded-r-xl">
                      <div className="py-4 pl-2">
                        <MdOutlineAdd size={28} color="gray"></MdOutlineAdd>
                      </div>
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
  );
}

export default MainItems;
