import React from "react";
import { MdSearch } from "react-icons/md";

function MainTopBar() {
  return (
    <div className="flex h-20 my-10 mx-20">
      <span className="text-3xl font-semibold w-4/5">
        <span className="text-mainYellow">Shoppingify</span>
        <span> allows you take your shopping list wherever you go</span>
      </span>
      <div className="w-1/4"></div>
      <div className=" w-1/2 flex items-center relative mb-6">
        <MdSearch
          size={26}
          color="lightDark"
          className="absolute ml-2 w-10"
        ></MdSearch>
        <input
          placeholder="search items"
          className="shadow-sm rounded-xl p-4 w-full pl-14"
        />
      </div>
    </div>
  );
}

export default MainTopBar;