import React from "react";
import { useQuery } from "@tanstack/react-query";
import Item from "./Item";
import { getCategoriesWithItems } from "../api/categories";

function MainItems() {
  const { data: categories } = useQuery(["categories"], getCategoriesWithItems);

  return (
    <div className="font-semibold">
      {categories.map((category) => {
        const items: any = category.items;
        return items.length > 0 ? (
          <div key={category.id}>
            <div className="text-2xl">{category.name}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
              {items.map((item) => {
                return <Item key={item.id} item={item}></Item>;
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
